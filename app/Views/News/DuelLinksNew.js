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

import Spinner from 'react-native-spinkit';

import NavigatorRoute from '../../Common/NavigatorRoute'

import RNFS from 'react-native-fs';
import LoadError from '../../Component/error'

const pageLimit = 30;
const path = RNFS.DocumentDirectoryPath + '/dl.json';
import Constants from '../../Common/Constants'

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
		this.newslist = [];
	}

	componentDidMount(){
		this.props.dispatch(fetchNewsListByPage());
	}

	render() {
		const {onLineNews} = this.props;
		if (onLineNews.newsList)
		{
			this.newslist = onLineNews.newsList;
		}
		let loading = onLineNews.loading == undefined? true : onLineNews.loading;
		return(
			<View style={styles.container}>
				<ListView
					enableEmptySections={true}
					automaticallyAdjustContentInsets={false}
					dataSource={this.dataSource.cloneWithRows(Array.from(this.newslist) )}
					renderRow={this._renderListItemView.bind(this)}
					refreshControl={
		                <RefreshControl
		                  refreshing={ loading }
	                      onRefresh={this._fetching.bind(this)}
		                />
	              }
				/>

				{/*{this.newslist.length ==0 && !loading  ? <View style={styles.container}>*/}
						 			                {/*<Spinner style={styles.spinner} isVisible ={true} type={'WanderingCubes'} size = {100} color={"#03a9f4"} />*/}
					                               {/*</View> : null}*/}
				{onLineNews.error ? <LoadError  reload={this._fetching.bind(this) } /> : null }
			</View>
		);
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
    return state;
}
export default connect(mapStateToProps)(DuelLinksNew);

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	spinner:{
		marginTop: height/2
	},
	spinnerText:{
		color:"#03a9f4",
		fontSize:16
	},
	error:{
		justifyContent:'center',
		alignItems:'center'
	},
	listContainer:{
		width: Constants.window.width,
		height: Constants.window.height - 50
	}
});