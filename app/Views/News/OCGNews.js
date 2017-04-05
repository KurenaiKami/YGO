/**
 * Created by Administrator on 2017/3/28.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	Text,
	Dimensions,
	Image,
	View,
	ListView,
} from 'react-native';


import {
	AdMobBanner,
	AdMobInterstitial,
	PublisherBanner,
	AdMobRewarded
} from 'react-native-admob'

export default class OCGNews extends Component
{
	componentDidMount(){

	}
	bannerError(){

	}
	adMobEvent(){

	}
	render(){
		return(
			<View style={styles.container}>
				<AdMobBanner
					style={styles.banner}
					bannerSize="banner"
					adUnitID="ca-app-pub-2034229154215609/3158764170"
					testDeviceID="EMULATOR"
					didFailToReceiveAdWithError={this.bannerError} />



			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	},
	banner:{

	}

})