/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import Header from '../Component/Header'
import NavigatorRoute from '../Common/NavigatorRoute'

export default class LoginView extends Component{
	accounts = [
		{name: 'QQ', icon: require('../Resources/Images/ic_account_qq.png')},
		{name: '微信', icon: require('../Resources/Images/ic_account_wechat.png')},
		{name: '微博', icon: require('../Resources/Images/ic_account_weibo.png')}
	]

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
								    onPress = {this.props.login}
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
		flexDirection:'row',
		paddingHorizontal:20,
		paddingTop: 15,
		paddingBottom: 30,
		justifyContent:'space-between'
	},
	accountItem:{
		alignItems:'center'
	}
})