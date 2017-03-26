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

import { fetchWechatNewsListByPage } from '../../actions/HomeAction'

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
		this.props.dispatch(fetchWechatNewsListByPage(1,pageLimit));
	}

	render(){
		const {news} = this.props;
		return(
			<Text>

			</Text>

		);
	}
}


function mapStateToProps(state) {
    const { news } = state;
    return {
        news,
    }
}
export default connect(mapStateToProps)(DuelLinksNew);

const styles = StyleSheet.create({
	wrapper: {
	}
});