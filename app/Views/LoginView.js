/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity,
	ToastAndroid,
	WebView
} from 'react-native';

import Header from '../Component/Header'
import NavigatorRoute from '../Common/NavigatorRoute'
import * as WeChat from 'react-native-wechat';

import StorageUtils from '../utils/StorageUtils'

import {
	WECHAT_APPID,
	WECHAT_SECRECT,
	WECHAT_FETCH_URL
} from '../Common/Constants'

import * as types from '../actions/ActionTypes'

import {connect} from 'react-redux';

class LoginView extends Component{
	accounts = [
		{name: '微信', icon: require('../Resources/Images/ic_account_wechat.png'),key:'wechat'},
		{name: '微博', icon: require('../Resources/Images/ic_account_weibo.png'),key:'weibo'}
	]

	constructor(props)
	{
		super(props);
		this.state={
			wechatOpenId: null,
			wechatCode: null,
			wechatAccessToken: null
		}
	}

	render(){
		const {route} = this.props;
		return(
			<View style={styles.container}>
				<Header
					leftIcon="ios-arrow-back"
					navigator={this.props.navigator}
					touchAction={this._touchAction.bind(this)}
				/>
				<View style={styles.accountWrapper}>
					{
						this.accounts.map((item,i) => {
							return(
								<LoginCell
									key={i}
									title = {item.name}
									imageName={item.icon}
									onPress={this._login.bind(this,item.key)}
								/>
							)
						})
					}
				</View>
			</View>
		);
	}

	 _login(key) {
		const {dispatch} = this.props;
		 if (key == "wechat")
		 {
			 WeChat.sendAuthRequest("snsapi_userinfo","wechat_sdk_demo")
				 .then(res=>{
					 this.setState({
						 wechatCode: res.code
					 })

					 this.getWechatAccessToken()
						 .then(res => {
							this.setState({
								wechatAccessToken: res.access_token,
								wechatOpenId: res.openid
							})
							this.getWechatUserInfo()
								.then(res =>{
									let data = {
										type: 'wechat',
										nickname: res.nickname,
										headimgurl: res.headimgurl,
									}
									StorageUtils.saveLoginState(data);
									dispatch({
										type: types.ACTION_LOGIN_FETCH_OK,
										loginData: data
									})

									NavigatorRoute.popBack(this.props.navigator);
								})
						 })
						 .catch(err => {
							 dispatch({
								 type: types.ACTION_LOGIN_FETCH_ERROR
							 })
							 ToastAndroid.show("error",ToastAndroid.SHORT);
						 })

				 })
				 .catch((error) => {
					 dispatch({
						 type: types.ACTION_LOGIN_FETCH_ERROR
					 })
					 ToastAndroid.show("error",ToastAndroid.SHORT);
				 })
		 }

		 else
		 {
			 NavigatorRoute.pushToWeiboAuthPage(this.props.navigator);
		 }
	}

	_touchAction()
	{
		NavigatorRoute.popBack(this.props.navigator);
	}

	//wechat auth
	getWechatAccessToken()
	{
		var OAUTH_URL = [
			WECHAT_FETCH_URL,
			'oauth2/access_token?appid=',
			WECHAT_APPID,
			'&secret=',
			WECHAT_SECRECT,
			'&code=',
			this.state.wechatCode,
			"&grant_type=authorization_code"
		].join('');
		return new Promise((resolve,reject) => {
			fetch(OAUTH_URL)
				.then((response) => {
					return response.json();
				})
				.then((responseData) => {
					resolve(responseData);
				})
				.catch(err => {
					reject(err);
				})
		})
	}

	getWechatUserInfo()
	{
		var OAUTH_URL = [
			WECHAT_FETCH_URL,
			'userinfo?access_token=',
			this.state.wechatAccessToken,
			'&openid=',
			this.state.wechatOpenId
		].join('');

		return new Promise((resolve,reject) => {
			fetch(OAUTH_URL)
				.then(response => {
					return response.json();
				})
				.then(responseData => {
					resolve(responseData);
				})
				.catch(err => {
					reject(err);
				})
		})
	}


}


const LoginCell = ({title,imageName,onPress}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.75}
			style={styles.staticCell}
			onPress = {onPress }
		>
			<Image
				style={{width: 50,height: 50,marginHorizontal:15}}
				source={imageName}
			/>
			<View  style={styles.cellStyle}>
				<Text style={{color:'gray'}}>{title}</Text>
				<Image
					style={{width:20,height:20}}
					source={require("../Resources/Images/ic_my_right.png")}
				/>
			</View>
		</TouchableOpacity>
	)
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(LoginView);


const styles = StyleSheet.create({
	container:{
		flex: 1,
	},
	accountWrapper:{
		flexDirection:'column',
		paddingHorizontal:20,
		paddingTop: 15,
		paddingBottom: 30,
		justifyContent:'space-between'
	},
	accountItem:{
		alignItems:'center'
	},
	staticCell:{
		flexDirection:'row',
		height: 60,
		justifyContent:'center',
		alignItems:'center',
		borderColor:"#d9d9d9",
		borderBottomWidth: 0.5
	},
	cellStyle:{
		flexDirection:'row',
		flex: 1,
		justifyContent:"space-between",
		alignItems:'center',
		height: 60,
		paddingRight: 15
	}
})