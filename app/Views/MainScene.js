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

import { connect } from 'react-redux';

import TabNavigator from 'react-native-tab-navigator';

import News from './News'
import CardsView from  './CardsView'
import StrategyView from  './StrategyView'
import MineView from  './MineView'

import Header from '../Component/Header'

const Items = [
	{
		key:'news',
		title: '资讯',
		icon_n: require('../Resources/Images/news_normal.png'),
		icon_s: require('../Resources/Images/news_sel.png'),
		content: News
	},
	{
		key: 'strategy',
		title: '攻略',
		icon_n: require('../Resources/Images/strategy_normal.png'),
		icon_s: require('../Resources/Images/strategy_sel.png'),
		content:  StrategyView
	},
	{
		key: 'cards',
		title: '卡组',
		icon_n: require('../Resources/Images/cards_normal.png'),
		icon_s: require('../Resources/Images/cards_sel.png'),
		content:  CardsView
	},
	{
		key: 'around',
		title: '个人中心',
		icon_n: require('../Resources/Images/mine_normal.png'),
		icon_s: require('../Resources/Images/mine_sel.png'),
		content:  MineView
	}
];

 class MainScene extends Component
{
    static propTypes = {
        navigator: React.PropTypes.object.isRequired,
        route: React.PropTypes.object.isRequired,
    };

	constructor(props)
	{
		super(props);
		this.state = {
			selectedTab:'news'
		};
	}

	componentDidMount(){
		const {dispatch} = this.props;
	}


	render()
	{
        const {mainPage} = this.props;

        return(
        	<View style={{flex:1}}>
		        <Header

		        />
		        <TabNavigator  tabBarStyle={styles.tab}>
			        {
				        Items.map((item,page) =>
				        {
					        let Content = item.content;
					        return(
						        <TabNavigator.Item
							        selected = {this.state.selectedTab === item.key}
							        title = {item.title}
							        titleStyle = {styles.tabText}
							        selectedTitleStyle = {styles.tabSelText}
							        renderIcon = { () => <Image  style={styles.icon} source={item.icon_n} /> }
							        renderSelectedIcon = { () => <Image style={styles.icon}  source={item.icon_s} />  }
							        onPress = {() => this.setState( {selectedTab: item.key} ) }
							        key = {page}
						        >
							        <Content navigator = {this.props.navigator} route = {this.props.route} />
						        </TabNavigator.Item>
					        )


				        })
			        }
		        </TabNavigator>
	        </View>

        );


	}
}

function mapStateToProps(state) {
    const { mainPage } = state;
    return {
        mainPage,
    }
}
export default connect(mapStateToProps)(MainScene);

const styles = StyleSheet.create({
	tab:{
		height:62,
		backgroundColor: '#f1f1f1',
		borderTopColor:'#aaaaaa',
		borderTopWidth: 0.5,
	},
	tabText:{
		fontSize:15,
		color:'#979797'
	},
	tabSelText:{
		color:'#03a9f4'
	},
	icon:{
		width:30,
		height:30
	}

});