import React,{Component} from 'react';
import
{
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

import ScrollableTabView,{DefaultTabBar}  from 'react-native-scrollable-tab-view';


import DuelLinksNew from './News/DuelLinksNew'

export default class News extends Component
{
	render(){
		return(
			<ScrollableTabView
				style={styles.root}
				tabBarPosition= "top"
				renderTabBar={ () =>  <DefaultTabBar   /> }
				tabBarBackgroundColor="#3be2e2"
				tabBarActiveTextColor = "black"
				tabBarUnderlineStyle = {styles.underline}
				tabBarTextStyle = {styles.tabText}
			>

				<DuelLinksNew tabLabel='DL资讯' />
				<DuelLinksNew tabLabel='OCG资讯' />
				<DuelLinksNew tabLabel='视频资讯' />
			</ScrollableTabView>
		);

	}
}

const styles = StyleSheet.create({
	root:{
		backgroundColor:'white',
		height:30
	},
	underline:{
		backgroundColor:"black",
		alignSelf:'center',
	},
	tabText:{
		fontSize:15,
		fontWeight:"bold"
	}
});