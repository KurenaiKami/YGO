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

import SingleImageCell from '../../Component/cell/SingleImageCell'

const {width,height} = Dimensions.get('window');

import {connect} from 'react-redux'

import {AdMobBanner} from 'react-native-admob'

import Spinner from 'react-native-spinkit';


const pageLimit = 30;

class DuelLinksNew extends Component
{

	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
	}

	componentDidMount(){
		this.props.dispatch(fetchNewsListByPage(pageLimit));
	}

	render() {
		const {onLineNews} = this.props;
		if (onLineNews.state == "pre_fetch")
		{
			return(
				<View style={styles.container}>
					<Spinner style={styles.spinner} isVisible ={true} type={'WanderingCubes'} size = {100} color={"#03a9f4"} />
				</View>
			);
		}
		else
		{
			let listData = onLineNews.newsList === undefined ? [] : onLineNews.newsList;
			console.log("_____" + listData);
			return (
				<ListView
					enableEmptySections={true}
					dataSource={this.dataSource.cloneWithRows(Array.from(listData) )}
					renderRow={this._renderListItemView.bind(this)}
				/>
			)
		}

	}

	_renderListItemView(data)
	{
			return <SingleImageCell category= {data} />
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
	container: {
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	spinner:{
		marginTop: height/2
	},
	spinnerText:{
		color:"#03a9f4",
		fontSize:16
	}
});