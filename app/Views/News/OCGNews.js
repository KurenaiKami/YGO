/**
 * Created by Administrator on 2017/3/28.
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

import SingleImageCell from '../../Component/cell/SingleImageCell'
import MultiImageCell from '../../Component/cell/MultiImageCell'

import { fetchOCGNews } from '../../actions/HomeAction'

import {connect} from 'react-redux'

import NavigatorRoute from '../../Common/NavigatorRoute'

class OCGNews extends Component
{
	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 })
	}

	componentDidMount(){
		this.props.dispatch(fetchOCGNews());
	}

	render(){
		const  {OCGNews} = this.props;

		let listData = OCGNews.newsList;
		if (listData != undefined)
		{
			return(
				<ListView
					enableEmptySections={true}
					dataSource={this.dataSource.cloneWithRows(Array.from(listData))}
					renderRow={this._renderItem.bind(this)}
					refreshControl={
			    	<RefreshControl
			    	    refreshing={OCGNews.loading}
			    	    onRefresh={this._refetch.bind(this)}
			    	/>
			    }
				/>
			);
		}
		else
		{
			return (<View></View>)
		}

	}

	_renderItem(data)
	{
		if (data.image_list.length == 3)
		{
			return <MultiImageCell category= {data} touchAction={this._touchAction.bind(this,data)   } />
		}
		else
		{
			return <SingleImageCell category= {data} touchAction={this._touchAction.bind(this,data)   } />
		}
	}

	_touchAction(category)
	{
		NavigatorRoute.pushToWebViewScene(this.props.navigator,category);
	}

	_refetch()
	{
		this.props.dispatch(fetchOCGNews());
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(OCGNews)

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},

})