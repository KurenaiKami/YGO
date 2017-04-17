import React,{Component} from 'react'
import
{
	StyleSheet,
	Image,
	View,
	WebView,
	Text,
	ScrollView,
} from 'react-native'

import {
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded
} from 'react-native-admob'

import {
	URL_NEWS_DETAIL,
} from  '../../Common/Constants';

import Header from '../../Component/Header'
import CommentToolbar from '../../Component/CommentToolbar'

import Constants from '../../Common/Constants'

import NavigatorRoute from '../../Common/NavigatorRoute'


import { connect } from 'react-redux';

class NewsDetail extends Component
{
	constructor(props)
	{
		super(props);
	}
	render(){
		const {route} = this.props;
		let params = route.paramers;

		return(
			<View style={styles.container}>
				<Header
					leftIcon="ios-arrow-back"
					navigator={this.props.navigator}
					touchAction={this._touchAction.bind(this)}
				/>
				<WebView
					ref="webView"
					source={{uri:  URL_NEWS_DETAIL +params.news_path}}
					startInLoadingState={true}
					scrollEnabled={false}
					scalesPageToFit={true}
					javaScriptEnabled={true}

					style={styles.webview}
				/>

				<View style={styles.banner}>
					<AdMobBanner
						bannerSize="banner"
						adUnitID="ca-app-pub-2034229154215609/3158764170"
						testDeviceID="EMULATOR"
						didFailToReceiveAdWithError={this.bannerError} />
				</View>
				<CommentToolbar
					comment = "1233"
					commentAction = {this._commentAction}
				    getCommentList = {this._getCommentList}
				/>

			</View>
		);
	}

	_commentAction()
	{

	}

	_getCommentList()
	{

	}

	_touchAction(){
		NavigatorRoute.popBack(this.props.navigator);
	}
}

function mapStateToProps(state) {
	const { routesStack } = state;
	return {
		routesStack,
	}
}
export default connect(mapStateToProps)(NewsDetail);

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	banner:{
		alignItems:'center',
	},
	webview:{
		width: Constants.window.width,
		height: Constants.window.height - Constants.window.navigation_height - 44
	}
})