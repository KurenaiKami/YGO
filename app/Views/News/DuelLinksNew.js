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
	RefreshControl
} from 'react-native';

import { fetchNewsListByPage } from '../../actions/HomeAction'

import SingleImageCell from '../../Component/cell/SingleImageCell'
import MultiImageCell from '../../Component/cell/MultiImageCell'

const {width,height} = Dimensions.get('window');

import {connect} from 'react-redux'

import {AdMobBanner} from 'react-native-admob'

import Spinner from 'react-native-spinkit';

import NavigatorRoute from '../../Common/NavigatorRoute'



const pageLimit = 30;

class DuelLinksNew extends Component
{
	static propTypes = {
		navigator: React.PropTypes.object.isRequired,
		route: React.PropTypes.object.isRequired,
	};

	constructor(props)
	{
		super(props);
		this.dataSource = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});

	}

	componentDidMount(){
		this.props.dispatch(fetchNewsListByPage());
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
		else if (onLineNews.state == 'fetch_ok')
		{
			let listData = onLineNews.newsList === undefined ? [] : onLineNews.newsList;
			console.log("_____" + onLineNews.loading);
			return (
				<ListView
					enableEmptySections={true}
					dataSource={this.dataSource.cloneWithRows(Array.from(listData) )}
					renderRow={this._renderListItemView.bind(this)}
					refreshControl={
		                <RefreshControl
		                  refreshing={onLineNews.loading}
                          onRefresh={this._fetching.bind(this)}
		                />
		              }
				/>
			)
		}
		else
		{
			return(
				<View></View>
			);
		}

	}

	_fetching()
	{
		this.props.dispatch(fetchNewsListByPage());
	}

	_renderListItemView(data)
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
}


function mapStateToProps(state) {
    const { onLineNews  } = state;
    return {
	    onLineNews
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