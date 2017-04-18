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

export default class error extends Component{
	render(){
		return(
			<View style={styles.container}>
				<TouchableOpacity
					style = {styles.bg}
					onPress = {this.props.reload}
				>
					<View style={styles.view}>
						<Text style={styles.reloadText}>加载失败</Text>
						<Image
							source={require('../Resources/Images/reload.png')}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		position:'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		justifyContent:'center',
		alignItems: 'center',
		paddingVertical: 10
	},
	bg:{
		backgroundColor:'rgba(0,0,0,0.9)',
		padding: 15,
		borderRadius: 5
	},
	view:{
		justifyContent:'center',
		alignItems:"center"
	},
	reloadText:{
		marginBottom:10,
		color:'#F2F2F2'
	}
})