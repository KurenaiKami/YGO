/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
	InteractionManager,
	ListView,
	RefreshControl
} from 'react-native'

import {connect} from 'react-redux';

import Header from '../Component/Header'
import NavigatorRoute from '../Common/NavigatorRoute'
import Constants from '../Common/Constants'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

class CommentView extends Component{
	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
		this.comments = [];
	}

	render(){
		let {CommentData} = this.props
		if (CommentData.comments)
		{
			this.comments = CommentData.comments;
		}

		let loading = CommentData.loading == undefined ? true : CommentData.loading;

		return(
			<View>
				<Header
					touchAction = {this._back.bind(this)}
					leftIcon="ios-arrow-back"
					title="最新评论"
				    navigator = {this.props.navigator}
				/>

				<ListView
					enableEmptySections={true}
				    renderRow={this._renderCommentList.bind(this)}
				    dataSource={this.dataSource.cloneWithRows(Array.from(this.comments))}
					refreshControl = {
						<RefreshControl
							refreshing={loading}
							onRefresh={this._refetch.bind(this)}
						/>
					}
				/>

			</View>
		)
	}

	_renderCommentList(data){
		return(
			<TouchableOpacity
				activeOpacity={0.75}
			    onPress={this._recomment.bind(this)}
			    style = {styles.row}
			>
				<Image
					style={styles.headImg}
					source={data.header_img}
				/>

				<View style={styles.commentInfo}>
					<Text style={styles.nickname}>data.nickname</Text>
					<Text style={styles.comment}>data.content</Text>
					<Text style={styles.publish_at}>data.date</Text>
					<TouchableOpacity
						onPress = {this.liketo.bind(this)}
					    activeOpacity={0.75}
					    style = {styles.like}
					>
						<FontAwesome name="thumbs-o-up" size={15} color="gray" />
						<Text style={styles.likeCount}>data.like</Text>
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		)
	}

	_refetch(){

	}
}

const styles = StyleSheet.create({
	row:{
		flexDirection:'row',
		borderBottomWidth:0.5,
		borderBottomColor: '#ccc',
		padding: 10
	},
	headImg:{
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ccc'
	},
	commentInfo:{
		marginLeft: 5
	},
	nickname: {
		color: 'gray',
	},
	comment:{
		marginTop: 5,
		fontSize : 15,
		width: Constants.window.width - 100
	},
	publish_at:{
		color:'gray',
		marginTop: 5,
		fontSize:12
	},
	like:{
		flexDirection:'row',
		position:'absolute',
		right: 10,
		bottom: 0,
	},
	likeCount:{
		color: 'gray',
		marginTop: 5
	}

})

function mapToStateProps(state) {
	return state;
}

export default connect(mapToStateProps)(CommentView)