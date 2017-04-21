/**
 * Created by Administrator on 2017/4/19.
 */
import React,{Component} from 'react'
import {
	StyleSheet,
	View,
	Image,
	ListView,
	Text
} from 'react-native'

import Constants from '../../Common/Constants'
import Header from '../../Component/Header'
import CommentToolbar from '../../Component/CommentToolbar'
import NavigatorRoute from '../../Common/NavigatorRoute';
import SectionHeader from '../../Component/SectionHeader'
import VideoPlayer from 'react-native-video-player'



import {
	AdMobBanner,
	AdMobRewarded
} from 'react-native-admob'

export default class VideoDetail extends Component{

	constructor(props){
		super(props);
		this.dataSource = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !== r2
		})
		this.commentlist = [];
		this.state={
			loadAd: false
		}
	}

	componentDidMount(){
		let deviceID = Constants.window.deviceId == undefined ? "EMULATOR" : Constants.window.deviceId;
		AdMobRewarded.setTestDeviceID(deviceID);
		AdMobRewarded.setAdUnitID('ca-app-pub-2034229154215609/1243304973');
		AdMobRewarded.addEventListener('rewardedVideoDidRewardUser',
			(type, amount) => console.log('rewardedVideoDidRewardUser', type, amount)
		);
		AdMobRewarded.addEventListener('rewardedVideoDidLoad',
			() => console.log('rewardedVideoDidLoad')
		);
		AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad',
			(error) => console.log('rewardedVideoDidFailToLoad', error)
		);
		AdMobRewarded.addEventListener('rewardedVideoDidOpen',
			() => console.log('rewardedVideoDidOpen')
		);
		AdMobRewarded.addEventListener('rewardedVideoDidClose',
			() => {
				console.log('rewardedVideoDidClose');
				AdMobRewarded.requestAd((error) => error && console.log(error));
			}
		);
		AdMobRewarded.addEventListener('rewardedVideoWillLeaveApplication',
			() => console.log('rewardedVideoWillLeaveApplication')
		);

		AdMobRewarded.requestAd((error) => error && console.log(error));
	}

	componentWillUnmount() {
		AdMobRewarded.removeAllListeners();
	}

	render(){
		const {route} = this.props;
		let category = route.category;
		let deviceID = Constants.window.deviceId == undefined ? "EMULATOR" : Constants.window.deviceId;
		return(
			<View style={styles.container}>
				<Header
					leftIcon="ios-arrow-back"
					touchAction = {this._back.bind(this)}
				/>
				<View style={{marginBottom: 8}}>
					<Text style={styles.title}>{category.title}</Text>
					<View style={styles.textContainer}>
						<Text style={styles.describe}>内容源自:{category.author}</Text>
						<Text style={styles.describe}>更新时间:2017.4.1</Text>
					</View>
				</View>

				<View style={styles.video}>
					<VideoPlayer
						endWithThumbnail
						thumbnail={{ uri: category.image }}
						video={{ uri: category.video }}
						videoWidth={Constants.window.width}
						videoHeight={260}
						duration={440/* I'm using a hls stream here, react-native-video
            can't figure out the length, so I pass it here from the vimeo config */}
						onPlayPress={this.playPress.bind(this)}
					/>

					{
						this.state.loadAd == true ?  <AdMobBanner
								style={styles.banner}
								bannerSize="mediumRectangle"
								adUnitID="ca-app-pub-2034229154215609/4962154175"
								testDeviceID={deviceID}/> : null
					}
				</View>

				<AdMobBanner
					bannerSize="banner"
					adUnitID="ca-app-pub-2034229154215609/4962154175"
					testDeviceID={deviceID}/>

				<SectionHeader
					title="最新评论"
				/>

				<CommentToolbar
					style={styles.toolBar}
					comment = "1233"
				/>

			</View>
		)
	}

	_renderList(data){
		return(
			<View></View>
		)
	}

	playPress(isPlaying)
	{
		this.setState({
			loadAd: isPlaying == true ? true:false
		})
		if (isPlaying == true)
		{
			AdMobRewarded.showAd((error) => error && console.log(error));
		}
	}

	_back(){
		NavigatorRoute.popBack(this.props.navigator);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	title:{
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10,
		color:'#4e4e4c',
		alignSelf:'center'
	},
	describe:{
		fontSize: 13,
		padding: 5
	},
	textContainer:{
		flexDirection:'row',
		justifyContent:'space-between',
	},
	video:{
		width: Constants.window.width,
		height: 260
	},
	toolBar: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	banner:{
		alignSelf:'center',
		marginTop: -250
	}
})