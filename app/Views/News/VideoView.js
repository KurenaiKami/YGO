/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	Image,
	View,
	ListView,
	RefreshControl
} from 'react-native';

import VideoCell from '../../Component/cell/VideoCell'

import { fetchVideos } from '../../actions/HomeAction'

import {connect} from 'react-redux'

import NavigatorRoute from '../../Common/NavigatorRoute'

class VideoView extends Component
{
	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 })
		this.newslist = [];
	}

	componentDidMount(){
		this.props.dispatch(fetchVideos());
	}

	render(){
		const  {VideoNews} = this.props;
		if (VideoNews.newsList )
		{
			this.newslist = VideoNews.newsList;
		}
		let loading = VideoNews.loading == undefined? true : VideoNews.loading;
		return(
			<ListView
				enableEmptySections={true}
				dataSource={this.dataSource.cloneWithRows(Array.from(this.newslist))}
				renderRow={this._renderItem.bind(this)}
				refreshControl={
		        <RefreshControl
		            refreshing={loading}
		            onRefresh={this._refetch.bind(this)}
		        />
		    }
			/>
		)

	}

	_renderItem(data)
	{
		return <VideoCell category= {data} touchAction={this._touchAction.bind(this,data)   } />
	}

	_touchAction(category)
	{
		NavigatorRoute.pushToWebViewScene(this.props.navigator,category);
	}

	_refetch()
	{
		this.props.dispatch(fetchVideos());
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(VideoView)

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},

})