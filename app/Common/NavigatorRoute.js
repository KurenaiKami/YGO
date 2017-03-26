import React,{Component} from 'react';
import
{
    BackAndroid,
    Alert
} from 'react-native';

import MainScene from '../Views/MainScene'

export default class NavigatorRoute extends Component
{
    static replaceToMainScene(navigator){
        navigator.replace({
            component:MainScene
        })
    }
}