/**
 * Created by Administrator on 2017/4/26.
 */
import React,{Component} from 'react';
import{
	View,
	Text,
	WebView,
	Image,
	StyleSheet,
	ToastAndroid
} from 'react-native';

var url = require('url');

import NavigatorRoute from '../../Common/NavigatorRoute'
import {
	WEIBO_APPID,
	WEIBO_SECRECT
} from '../../Common/Constants'

import NetUtils from '../../utils/NetUtils'

import {connect} from 'react-redux';

import * as types from '../../actions/ActionTypes';
import StorageUtils from '../../utils/StorageUtils';

var OAUTH_URL = [
	'https://api.weibo.com/oauth2/authorize',
	'?client_id=',
	WEIBO_APPID,
	'&response_type=code',
	'&redirect_uri=https://api.weibo.com/oauth2/default.html'
].join('');

var navigator;

class WeiboPage extends Component{
	constructor(props)
	{
		super(props);
		navigator = this.props.navigator;
	}
	render()
	{
		let {router } = this.props;
		return(
			<View style={ styles.container}>
				<WebView
					source={{uri:OAUTH_URL}}
				    ref={'webview'}
				    automaticallyAdjustContentInsets={false}
				    onNavigationStateChange={this._onNavigationStateChange.bind(this)}
				    startInLoadingState={true}
				    scalesPageToFit={true}
				/>
			</View>
		)
	}

	_onNavigationStateChange(navState)
	{
		const {dispatch} = this.props;
		var urlObj = url.parse(navState.url,true);
		if (urlObj.pathname == url.parse("https://api.weibo.com/oauth2/default.html").pathname)
		{
			let code  = urlObj.query.code;
			var authUrl = "https://api.weibo.com/oauth2/access_token?client_id="+WEIBO_APPID+"&client_secret="+WEIBO_SECRECT+"&grant_type=authorization_code" +
				"&redirect_uri=https://api.weibo.com/oauth2/default.html&code=" + code;

			NetUtils.post(authUrl)
				.then(res=>{
					let access_token = res.access_token;
					let uid = res.uid;
					NavigatorRoute.popBack(this.props.navigator);

					NetUtils.get("https://api.weibo.com/2/users/show.json?access_token=" + access_token + "&uid="+ uid)
						.then(res=>{
							let data = {
								type: 'weibo',
								nickname: res.name,
								headimgurl: res.avatar_large,
							}
							StorageUtils.saveLoginState(data);
							dispatch({
								type: types.ACTION_LOGIN_FETCH_OK,
								loginData: data
							})
							NavigatorRoute.popBack(this.props.navigator);
						},err=>{
							ToastAndroid.show("error weibo" + err.error_code,ToastAndroid.SHORT);
						})

				},err=>{
					dispatch({
						type: types.ACTION_LOGIN_FETCH_ERROR
					})
				})
		}
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(WeiboPage);

const styles = StyleSheet.create({
	container:{
		flex:1,
	}
})