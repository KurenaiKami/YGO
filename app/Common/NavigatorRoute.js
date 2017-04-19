import React,{Component} from 'react';
import
{
    BackAndroid,
    Alert,
	ToastAndroid,
	Navigator
} from 'react-native';

import MainScene from '../Views/MainScene'
import NewsDetail from '../Views/News/NewsDetail'
import LoginView from '../Views/LoginView'
import VideoDetail from '../Views/News/VideoDetail'

export default class NavigatorRoute extends Component
{
    static replaceToMainScene(navigator){
        navigator.replace({
            component:MainScene
        })
    }

    static pushToWebViewScene(navigator,paramers)
    {
    	navigator.push({
    		component: NewsDetail,
		    paramers: paramers
	    })
    }

    static pushToLoginView(navigator)
    {
    	navigator.push({
    		component: LoginView,
		    sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
	    })
    }

    static pushToVideoScene(navigator,paramers)
    {
    	navigator.push({
    		component: VideoDetail,
		    category: paramers
	    })
    }

    static  popBack(navigator)
    {
        if (navigator && navigator.getCurrentRoutes().length > 1)
        {
        	navigator.pop();
        	return true;
        }

	    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
		    return false;
	    }
	    this.lastBackPressed = Date.now();
	    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }
}