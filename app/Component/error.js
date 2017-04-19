/**
 * Created by Administrator on 2017/4/18.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	View
} from 'react-native';

import Constants from '../Common/Constants'

export default class LoadError extends Component{
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity
					style = {styles.bg}
					onPress = {this.props.reload}
				    activeOpacity={0.75}
				>
					<View style={styles.view}>
						<Image
							source={require('../Resources/Images/reload.png')}
						/>
						<Text style={styles.reloadText}>加载失败</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
		alignItems: 'center',
		paddingVertical: -Constants.window.width/2,
	},
	bg:{
		padding: 15,
		borderRadius: 5,
		backgroundColor: '#aaaaaa'
	},
	view:{
		justifyContent:'center',
		alignItems:"center"
	},
	reloadText:{
		marginTop:10,
		color:'#F2F2F2'
	}
})