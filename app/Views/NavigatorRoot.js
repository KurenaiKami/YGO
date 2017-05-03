import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    BackAndroid,
	Platform
} from 'react-native';

import Splash from './Splash';

import NavigatorRoute from '../Common/NavigatorRoute'

import StorageUtils from '../utils/StorageUtils'

import * as WeChat from 'react-native-wechat';

import {
	WECHAT_APPID
} from '../Common/Constants'

var _navigator = null;
export default class NavigatorRoot extends Component{
	constructor(props){
		super(props);
		this.isIOS = Platform.OS === 'ios'?true:false;
	}

	componentDidMount(){
		StorageUtils.initStorage();
		if (!this.isIOS)
		{
			BackAndroid.addEventListener('hardwareBackPress',() => {
				return NavigatorRoute.popBack(_navigator);
			})
		}

		try {
			WeChat.registerApp(WECHAT_APPID);//从微信开放平台申请
		} catch (e) {
			console.error(e);
		}
	}

	componentWillUnmount(){
		if (!this.isIOS)
		{
			BackAndroid.removeEventListener('hardwardBackPress');
		}
	}

	_configureScene = route => {
		if (route.sceneConfig) return route.sceneConfig

		return {
			...Navigator.SceneConfigs.HorizontalSwipeJumpFromRight,
			gestures: {}    // 禁用左滑返回手势
		}
	}

    render(){
        return(
            <Navigator
                style = {styles.nav}
                configureScene={this._configureScene}
                renderScene={this._renderScene}
                initialRoute={{
                    component:Splash
                }}
            />

        )
    }

    _renderScene(route,navigator)
    {
        let Component  = route.component;
	    _navigator = navigator;
        return(
            <Component  navigator = {navigator} route = {route} />
        )
    }

}

const styles = StyleSheet.create({
    nav:{
        flex:1
    }

})