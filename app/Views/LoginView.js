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

var loginCallback = null;

export default class LoginView extends Component{
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

	componentDidMount(){
		try {
			WeChat.registerApp('wxe05e677dbcfe0d63');//从微信开放平台申请
		} catch (e) {
			console.error(e);
		}
	}

	render(){
		const {route} = this.props;
		loginCallback = route.paramers;

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
		 //NavigatorRoute.pushToWeiboAuthPage(this.props.navigator);
		 // WeChat.isWXAppInstalled()
		 //  .then(function (isInstalled) {
		 // 	if (isInstalled)
		 // 	{
		 // 		WeChat.shareToSession({type: 'text',description:'test wechat'})
		 // 			.catch((error) => {
		 // 				console.log("share error" + error);
		 // 			})
		 // 	}
		 // 	else
		 // 	{
		 // 		ToastAndroid.show('没有安装微信软件，请您安装微信之后再试', ToastAndroid.SHORT);
		 // 	}
		 //
		 //  })

		 if (key == "wechat")
		 {
			 WeChat.sendAuthRequest("snsapi_userinfo","wechat_sdk_demo")
				 .then(res=>{
					 this.setState({
						 wechatCode: res.code
					 })

					 ToastAndroid.show("code=="+ this.state.wechatCode,ToastAndroid.SHORT);

					 this.getWechatAccessToken()
						 .then(res => {
							this.setState({
								wechatAccessToken: res.access_token,
								wechatOpenId: res.openid
							})

						    ToastAndroid.show("wechatAccessToken=="+ this.state.wechatAccessToken,ToastAndroid.SHORT);

							this.getWechatUserInfo()
								.then(res =>{
									StorageUtils.saveLoginState({
										type: 'wechat',
										nickname: res.nickname,
										headimgurl: res.headimgurl,
										country: res.country,
									})
									loginCallback(true);

									ToastAndroid.show("nickname=="+ res.nickname,ToastAndroid.SHORT);
									ToastAndroid.show("headimgurl=="+ res.headimgurl,ToastAndroid.SHORT);
								})

						 })
						 .catch(err => {

							 loginCallback(false);
							 ToastAndroid.show("error",ToastAndroid.SHORT);
						 })

				 })
				 .catch((error) => {
				    loginCallback(false);

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
		return new Promise((resolve,reject) => {
			fetch("https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe05e677dbcfe0d63&secret=fa86b6b518eabee2b3465e2292e5ec36&code="
				+ this.state.wechatCode + "&grant_type=authorization_code")
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
		return new Promise((resolve,reject) => {
			fetch("https://api.weixin.qq.com/sns/userinfo?access_token=" + this.state.wechatAccessToken + "&openid=" + this.state.wechatOpenId)
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