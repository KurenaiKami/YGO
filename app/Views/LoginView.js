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


export default class LoginView extends Component{
	accounts = [
		{name: '微信', icon: require('../Resources/Images/ic_account_wechat.png')},
		{name: '微博', icon: require('../Resources/Images/ic_account_weibo.png')}
	]

	constructor(props)
	{
		super(props);

	}

	componentDidMount(){
		try {
			WeChat.registerApp('wxe05e677dbcfe0d63');//从微信开放平台申请
		} catch (e) {
			console.error(e);
		}


		let savedata = {
			type: "weixin",
			username: "name",
			token: "token",
			headimage: "image",
			sex: "1",
		};
		StorageUtils.saveLoginState(savedata);

	}

	render(){
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
								<TouchableOpacity
									activeOpacity={0.75}
								    onPress = {this._login.bind(this)}
								    key={i}
								    style = {styles.accountItem}
								>
									<Image
										style={{width:50,height:50,marginBottom:5}}
									    source={item.icon}
									/>
									<Text style={{color:"#999999",fontSize: 13}}>{item.name}</Text>
								</TouchableOpacity>
							)
						})
					}
				</View>
			</View>
		);
	}

	 _login(){
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

		 WeChat.sendAuthRequest("snsapi_userinfo")
			 .then((response) => {
		 	    response.json();
			 })
			 .then(function (responseData) {
				 let savedata = {
					 type: "weixin",
					 username: "name",
					 token: "token",
					 headimage: "image",
					 sex: "1",
				 };
				 StorageUtils.saveLoginState(savedata);
			 })
			 .catch((error) => {

			 })
	}
	_touchAction()
	{
		NavigatorRoute.popBack(this.props.navigator);
	}
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
	}
})