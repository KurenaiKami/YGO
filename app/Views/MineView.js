/**
 * Created by Administrator on 2017/3/28.
 */
import React,{Component} from 'react'
import {
	Image,
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	InteractionManager
} from 'react-native'

import Constant from '../Common/Constants'

import NavigatorRoute from '../Common/NavigatorRoute'

import StorageUtils from '../utils/StorageUtils';

export default class MineView extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			islogin: false
		}
	}

	componentDidMount(){
		StorageUtils.isLogin()
			.then(islogin => {
				if (islogin)
				{
					this.setState({
						islogin: true
					})
					console.log("login...........true" );
				}
			}).catch(err=>{
				console.log("login..........." + err);
		})
	}

	render()
	{
		return(
			<View style={styles.container}>
				<HeaderView settingAction={this._settingAction} loginAction = {this._loginAction.bind(this)}  islogin = {this.state.islogin} />
				<View style={styles.cellContainer}>
					<ProfileStaticCell
						title="我的收藏"
						style={{borderBottomWidth:0.5}}
					    imageName={require("../Resources/Images/ic_my_collect.png")}
					    onPress = {this._onPressCell}
					/>

					<ProfileStaticCell
						title="我的消息"
						style={{borderBottomWidth:0.5}}
						imageName={require("../Resources/Images/ic_my_message.png")}
						onPress = {this._onPressCell}
					/>

					<ProfileStaticCell
						title="检查更新"
						style={{borderBottomWidth:0.5}}
						imageName={require("../Resources/Images/ic_my_upload.png")}
						onPress = {this._onPressCell}
					/>

					<ProfileStaticCell
						title="免责声明"
						style={{borderBottomWidth:0.5}}
						imageName={require("../Resources/Images/ic_my_order.png")}
						onPress = {this._onPressCell}
					/>
				</View>
			</View>
		);
	}

	_onPressCell()
	{

	}
	_settingAction(){

	}

	_loginAction(){
		InteractionManager.runAfterInteractions(()=>{
			NavigatorRoute.pushToLoginView(this.props.navigator);
		})
	}
}


const HeaderView = ({settingAction,loginAction,islogin}) => {
	return(
		<Image
			style={styles.headerImage}
		    source={require("../Resources/Images/img_my_head.png")}
		>

			<View style={styles.headerContainer}>
				<TouchableOpacity
					onPress ={settingAction}
				    activeOpacity={0.75}
				    style = {styles.settingContainer}
				>
					<Image
						style={styles.settingImage}
					    source={require("../Resources/Images/ic_my_setting.png")}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.imageHeader}>
				<View style={styles.avatarContainer}>
					<Image
						style={{width: 80,height:80}}
						source={require("../Resources/Images/img_default_avatar.png")}
					/>
				</View>
				{islogin ? null :
				<TouchableOpacity
					activeOpacity={0.74}
					onPress = {loginAction}
					style={styles.loginContainer}
				>
					<Text style={styles.loginText}>点击登录</Text>
				</TouchableOpacity>}

			</View>
		</Image>
	)
}


const ProfileStaticCell = ({title,imageName,style,onPress}) => {
	return (
		<TouchableOpacity
			activeOpacity={0.75}
		    style={styles.staticCell}
		    onPress = {onPress(title) }
		>
			<Image
				style={{width: 20,height: 20,marginHorizontal:15}}
			    source={imageName}
			/>
			<View  style={[styles.cellStyle,style]}>
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
		flex:1
	},
	headerImage:{
		width: Constant.window.width,
		height: 230,
		alignItems:'center',
		backgroundColor:'transparent'
	},
	headerContainer:{
		width: Constant.window.width,
		height: 50,
		alignItems:'center',
		justifyContent:'center',
	},
	settingContainer:{
		width: 50,
		height: 50,
		position: 'absolute',
		top:0,
		right: 0,
		justifyContent:'center',
		alignItems:'center'
	},
	settingImage:{
		width:20,
		height: 20
	},
	imageHeader:{
		alignItems:'center',
		justifyContent:'center'
	},
	avatarContainer:{
		width: 90,
		height:90,
		borderRadius: 45,
		backgroundColor:'white',
		justifyContent:'center',
		alignItems:'center',
		marginBottom:15
	},
	loginContainer:{
		borderRadius: 2,
		borderWidth:2,
		borderColor:'white',
		paddingVertical:5,
		paddingHorizontal: 20
	},
	loginText:{
		color: 'white',
		fontSize: 16
	},
	cellContainer:{
		borderColor:'#d9d9d9',
		marginTop: 15,
		backgroundColor:'white',
		borderTopWidth:0.5,
		borderBottomWidth:0.5
	},
	cellStyle:{
		flex:1,
		justifyContent:'space-between',
		alignItems:'center',
		height: 53,
		flexDirection:'row',
		borderColor:'#d9d9d9',
		paddingRight:15
	},
	staticCell:{
		flexDirection:'row',
		height:53,
		justifyContent:'center',
		alignItems:'center'
	}
})