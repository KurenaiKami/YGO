/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react'
import {
	StyleSheet,
	View,
	Image,
	ListView,
	Text
} from 'react-native'

import Constants from '../../Common/Constants'
import Header from '../../Component/Header'
import CommentToolbar from '../../Component/CommentToolbar'
import NavigatorRoute from '../../Common/NavigatorRoute';

import Video from 'react-native-video'

export default class VideoDetail extends Component{
	render(){
		const {route} = this.props;
		let category = route.category;

		return(
			<View style={styles.container}>
				<Header
					title = "视频详情"
					leftIcon="ios-arrow-back"
					touchAction = {this._back.bind(this)}
				/>

				<Video source={{uri: category.video}}
				       rate={1.0}
				       volume={1.0}
				       muted={false}
				       paused={false}
				       resizeMode="cover"
				       repeat={true}
				       style={{height: 200, width: Constants.window.width}}/>
			</View>
		)
	}

	_back(){
		NavigatorRoute.popBack(this.props.navigator);
	}
}

const styles = StyleSheet.create({
	container:{
		width: Constants.window.width,
		height: Constants.window.height
	}
})