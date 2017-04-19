import React,{Component} from 'react';
import
{
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView
} from 'react-native';

import ScrollableTabView,{DefaultTabBar}  from 'react-native-scrollable-tab-view';


import { fetchWechatNewsListByPage } from '../actions/HomeAction'

import DuelLinksNew from './News/DuelLinksNew'
import OCGNews from './News/OCGNews'
import VideoView from './News/VideoView'

import { connect } from 'react-redux';

class News extends Component
{
	render(){
        const {news} = this.props;
		return(
			<ScrollableTabView
				tabBarPosition= "top"
				renderTabBar={ () =>  <DefaultTabBar   /> }
				tabBarUnderlineStyle = {styles.underline}
				tabBarActiveTextColor ="#03a9f4"
				tabBarInactiveTextColor='#9b9b9b'
				tabBarBackgroundColor='#ffffff'
				tabBarTextStyle={{fontSize:14}}
			>

			<View tabLabel = '决斗链接'>
				<DuelLinksNew navigator={this.props.navigator} route = {this.props.route}  />
			</View>
			<View tabLabel='游戏王OCG'>
				<OCGNews navigator={this.props.navigator} route = {this.props.route} />
			</View>
			<View tabLabel='视频'>
				<VideoView navigator={this.props.navigator} route = {this.props.route} />
			</View>

			</ScrollableTabView>
		);

	}
}


function mapStateToProps(state) {
    const { news } = state;
    return {
        news,
    }
}
export default connect(mapStateToProps)(News);

const styles = StyleSheet.create({
	root:{
		backgroundColor:'white',
	},
	content:{
		flex:1,
	},
	underline:{
		backgroundColor:"#03a9f4",
		alignSelf:'center',
	},

	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	}
});