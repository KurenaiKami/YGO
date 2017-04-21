/**
 * Created by Administrator on 2017/4/17.
 */
import React, {Component} from 'react'
import{
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import Constant from '../Common/Constants'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class CommentToolbar extends Component {
	render(){
		let {comment} = this.props;
		return(

			<View style={styles.container}>
				<TouchableOpacity
					style = {styles.editComment}
					onPress = {this.props.commentAction}
				    activeOpacity={0.75}
				>
					<Icon name="edit" size={18} color="gray"  />
					<Text>写评论</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style = {styles.editComment}
					onPress = {this.props.getCommentList}
				    activeOpacity={0.75}
				>
					<Icon name="commenting-o" size={18} color="gray" />
					<Text>{comment}</Text>
				</TouchableOpacity>

			</View>
		);

	}
}

const styles = StyleSheet.create({
	container:{
		position:'absolute',
		bottom: 0,
		flexDirection: 'row',
		height: 44,
		width: Constant.window.width,
		borderTopWidth: 0.5,
		borderTopColor: '#979797',
		backgroundColor:'#f1f1f1'
	},
	editComment:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	}
})