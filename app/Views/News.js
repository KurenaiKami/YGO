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
import { connect } from 'react-redux';

const cates = [
	{
		key:'top'
	}
];
class News extends Component
{
	render(){
        const {news} = this.props;
		return(
			<ScrollableTabView
				tabBarPosition= "top"
				renderTabBar={ () =>  <DefaultTabBar   /> }
				tabBarUnderlineStyle = {styles.underline}
				tabBarTextStyle = {styles.tabText}
			>

			<View tabLabel = '决斗链接'>
				<DuelLinksNew navigator={this.props.navigator} route = {this.props.route} categoryKey={cates[0].key } />
			</View>
			<View tabLabel='游戏王OCG'>
			</View>
			<View tabLabel='视频'>
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
		backgroundColor:"#3be2e2",
		alignSelf:'center',
	},
	tabText:{
		color:'#3be2e2'
	},

	wrapper: {
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB'
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5'
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9'
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold'
	}
});