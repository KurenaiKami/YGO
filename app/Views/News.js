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

import Swiper from 'react-native-swiper';

import DuelLinksNew from './News/DuelLinksNew'

export default class News extends Component
{
	render(){
		return(

			<ScrollableTabView
				tabBarPosition= "top"
				renderTabBar={ () =>  <DefaultTabBar   /> }
				tabBarUnderlineStyle = {styles.underline}
				tabBarTextStyle = {styles.tabText}

			>
				<View tabLabel = 'DuelLinks'>

					<DuelLinksNew  />
				</View>
			<View tabLabel='OCG'>
			</View>
			<View tabLabel='视频'>
			</View>

			</ScrollableTabView>
		);

	}
}

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