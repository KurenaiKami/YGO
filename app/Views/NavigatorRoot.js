import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    BackAndroid
} from 'react-native';

import Splash from './Splash';


export default class NavigatorRoot extends Component{

    render(){
        return(
            <Navigator
                style = {styles.nav}
                configureScene={this.configureScene}
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
        this._nav = navigator;
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