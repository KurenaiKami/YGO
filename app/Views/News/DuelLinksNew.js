/**
 * Created by Administrator on 2017/3/20.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	Image,
	View,
    ListView,
} from 'react-native';

import { fetchNewsListByPage } from '../../actions/HomeAction'

import AdCell from '../../Component/cell/AdCell'

const {width} = Dimensions.get('window');

import {connect} from 'react-redux'

const pageLimit = 10;

class DuelLinksNew extends Component
{

	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
	}

	componentDidMount(){
		this.props.dispatch(fetchNewsListByPage(this.props.categoryKey));
	}

	render(){
		const {onLineNews } = this.props;
		if (onLineNews[this.props.categoryKey] )
		{
			if (onLineNews[this.props.categoryKey].state == 'pre_fetch')
			{
				return(
					<View>

					</View>
				);
			}

			let listData = onLineNews [this.props.categoryKey].newsList === undefined ? [] : onLineNews [this.props.categoryKey].newsList;
			return(
				<ListView
					enableEmptySections={true}
					dataSource={this.dataSource.cloneWithRows(Array.from(listData) )}
					renderRow={this._renderListItemView.bind(this)}
				/>
			);

		}
		else
		{
			return(
				<View>
				<Text>Loading</Text>
			</View>);
		}
	}

	_renderListItemView(data)
	{
		return <AdCell category= {data} />
	}
}


function mapStateToProps(state) {
    const { onLineNews  } = state;
    return {
	    onLineNews ,
    }
}
export default connect(mapStateToProps)(DuelLinksNew);

const styles = StyleSheet.create({
	wrapper: {
	}
});