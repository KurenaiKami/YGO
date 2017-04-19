/**
 * Created by Administrator on 2017/4/17.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	ListView,
	RefreshControl
} from 'react-native'

import SingleImageCell from '../Component/cell/SingleImageCell'
import MultiImageCell from '../Component/cell/MultiImageCell'
import Constants from '../Common/Constants'
import NavigatorRoute from '../Common/NavigatorRoute'

import {fetchCardNews} from '../actions/HomeAction'

import {connect} from 'react-redux'


class CardsView extends Component{
	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2 })
		this.newsList = [];
	}

	componentDidMount()
	{
		this.props.dispatch(fetchCardNews());
	}

	render(){
		const {CardNews } = this.props;
		if (CardNews.newsList)
		{
			this.newsList = CardNews.newsList;
		}
		let loading = CardNews.loading == undefined ? true : CardNews.loading;

		return(
			<ListView
				enableEmptySections={true}
				dataSource={this.dataSource.cloneWithRows(Array.from(this.newsList))}
				renderRow={this._renderRowItem.bind(this)}
				refreshControl={
		        <RefreshControl
		            refreshing={loading}
		            onRefresh={this._refresh.bind(this)}
		        />
		    }
			/>
		)

	}

	_renderRowItem(data){
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

	_refresh()
	{
		this.props.dispatch(fetchCardNews());
	}
}

function  mapToStateProps(state) {
	return state;
}
export default connect(mapToStateProps)(CardsView)

const styles = StyleSheet.create({

})