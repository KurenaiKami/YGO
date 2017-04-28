/**
 * Created by Administrator on 2017/4/26.
 */
import React,{Component} from 'react';
import{
	View,
	Text,
	WebView,
	Image,
	StyleSheet
} from 'react-native';

var url = require('url');

import NavigatorRoute from '../../Common/NavigatorRoute'

var OAUTH_URL = [
	'https://api.weibo.com/oauth2/authorize',
	'?client_id=404581112',
	'&response_type=code',
	'&redirect_uri=https://api.weibo.com/oauth2/default.html'
].join('');

var navigator;

export default class WeiboPage extends Component{
	constructor(props)
	{
		super(props);
		navigator = this.props.navigator;
		console.log(navigator+"<<<<<<<<<-----------------this is navigator");
	}
	render()
	{
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
		//https://api.weibo.com/oauth2/access_token
		var urlObj = url.parse(navState.url,true);
		if (urlObj.pathname == url.parse("https://api.weibo.com/oauth2/default.html").pathname)
		{
			let code  = urlObj.query.code;
			var authUrl = "https://api.weibo.com/oauth2/access_token?client_id=404581112&client_secret=aa44130ebf0dd00e2f554ad57d15b75f&grant_type=authorization_code" +
				"&redirect_uri=https://api.weibo.com/oauth2/default.html&code=" + code;

			fetch(authUrl,{
				method: "post"
			}).then(function (response) {
				return response.json();
			}).then(function (responseData) {
				console.log(responseData+"::::::<<<---------------data"+",,code=-------------->>>>>>>" + code);
				NavigatorRoute.popBack(navigator);
			})
		}
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	}
})