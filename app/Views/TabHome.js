/*
* auth kurenai
* 底部的MENU选项
*
* */

import React ,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import News from './News'

const Items = [
	{
		key:'news',
		title: '资讯',
		icon_n: require('../Resources/Images/news_normal.png'),
		icon_s: require('../Resources/Images/news_sel.png'),
		content: <News />
	},
	{
		key: 'strategy',
		title: '攻略',
		icon_n: require('../Resources/Images/strategy_normal.png'),
		icon_s: require('../Resources/Images/strategy_sel.png'),
		content: <News />
	},
	{
		key: 'cards',
		title: '卡组',
		icon_n: require('../Resources/Images/cards_normal.png'),
		icon_s: require('../Resources/Images/cards_sel.png'),
		content: <News />
	},
	{
		key: 'around',
		title: '周边',
		icon_n: require('../Resources/Images/shop_normal.png'),
		icon_s: require('../Resources/Images/shop_sel.png'),
		content: <News />
	}
];

export default class TabHome extends Component
{

	constructor(props)
	{
		super(props);
		this.state = {
			selectedTab:'news'
		};
	}

	renderItem(item,page)
	{
		return(
			<TabNavigator.Item
				selected = {this.state.selectedTab === item.key}
			    title = {item.title}
			    titleStyle = {styles.tabText}
				selectedTitleStyle = {styles.tabSelText}
			    renderIcon = { () => <Image  style={styles.icon} source={item.icon_n} /> }
			    renderSelectedIcon = { () => <Image style={styles.icon}  source={item.icon_s} />  }
				onPress = {() => this.setState( {selectedTab: item.key} ) }
			>
				{item.content}
			</TabNavigator.Item>
		);
	}

	render()
	{
		let navItems = [];
		navItems.push( Items.map( (item,page) => this.renderItem(item,page) ) );
		return(
			<TabNavigator  tabBarStyle={styles.tab}>
				{navItems}
			</TabNavigator>
		);
	}
}

const styles = StyleSheet.create({
	tab:{
		height:62,
		backgroundColor: '#f1f1f1',
	},
	tabText:{
		fontSize:14,
		color:'#979797'
	},
	tabSelText:{
		color:'#3be2e2'
	},
	icon:{
		width:30,
		height:30
	}

});