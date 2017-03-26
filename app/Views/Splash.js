import React,{Component} from 'react';

import {
	StyleSheet,
	Image,
	Text,
	View,
	StatusBar,
} from 'react-native';

import FeedAnimatedImage from '../Component/FeedAnimatedImage'

import NavigatorRoute from '../Common/NavigatorRoute'

const AD_SOURCE = [
	'http://img.zcool.cn/community/018f5255f959116ac7251df8af2a4d.jpg',
	'http://ec4.images-amazon.com/images/I/515BsYKPz0L._SY400_.jpg',
	'http://www.qlmoney.com/uploadfile/2016/1010/20161010033437141.jpg',
	'http://img4.duitang.com/uploads/item/201601/16/20160116233008_YGQCc.jpeg',
	'http://image.kejixun.com/2016/1118/20161118121413566.jpeg',
	'http://www.wedalian.com/Uploads/a/2016/02/02/ntlbueffi02.jpg',
	'http://www.wedalian.com/Uploads/a/2016/02/02/epmpwrk3rql.jpg',
	'http://easyread.ph.126.net/xWCFBUaTqiJWcnZksiGiXQ==/7916647547221380812.jpg',
	'http://wanzao2.b0.upaiyun.com/system/pictures/16123497/original/1421908034_216x224.png',
	'http://img3.duitang.com/uploads/item/201602/25/20160225174417_i8ASK.jpeg',
];

export default class Splash extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			adSecondsCount: 4,
			showAdMark: false
		}
		this._curIndex =2;
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			if (this.state.adSecondsCount <= 1)
			{
				this.timer&& clearInterval(this.timer);
                NavigatorRoute.replaceToMainScene(this.props.navigator);
			}
			else
			{
                this.setState({
                    adSecondsCount: --this.state.adSecondsCount
                });
			}
		},1000)
	}

	componentWillUnmount(){
		this.timer && clearInterval(this.timer);
	}

	render(){
		return(
			<View style={styles.container}>

			{<StatusBar hidden={true} />}
				<FeedAnimatedImage
					style = {styles.feedImg}
					inputRange={[0,100]}
				    outputRange={[0,1]}
				    source={AD_SOURCE[0]}
				    onLoad = {this._onLoad.bind(this)}
				>

				</FeedAnimatedImage>

				<Text style={styles.secondsCounts}
				      onPress={this._secondsCountsPressed.bind(this)}>
					{this.state.showAdMark ? (this.state.adSecondsCount + '秒') : ''}
				</Text>

				<View style={[styles.adMarkContainer, {borderColor: this.state.showAdMark ? '#6fd177' : 'white'}]}>
					<Text style={styles.adMarkText}>{this.state.showAdMark ? 'AD' : ''}</Text>
				</View>

			</View>
		)
	}


	_onLoad(){
		this.setState({
			showAdMark: true
		})
	}

	_secondsCountsPressed(){

	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#ffffff',
	},
	feedImg:{
		flex:1,
		resizeMode:'cover'
	},
	secondsCounts:{
		color: '#a0a0a0',
		fontSize: 18,
		marginRight: 15,
		alignSelf: 'flex-end',
	},

	adMarkContainer: {
		position: 'absolute',
		top: 15,
		left: 15,
		backgroundColor: 'white',
		paddingLeft: 2,
		paddingRight: 2,
		borderStyle: null,
		borderWidth: 0.5,
		borderRadius: 2,
		width: 24,
	},
	adMarkText: {
		color: '#6fd177',
	},


})