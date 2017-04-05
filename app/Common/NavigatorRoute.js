import React,{Component} from 'react';
import
{
    BackAndroid,
    Alert
} from 'react-native';

import MainScene from '../Views/MainScene'
import NewsDetail from '../Views/News/NewsDetail'

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

    static  popBack(navigator)
    {
        if (navigator && navigator.getCurrentRoutes().length > 1)
        {
        	navigator.pop();
        }
        return true;
    }
}