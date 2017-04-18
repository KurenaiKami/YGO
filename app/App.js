import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import {Provider} from 'react-redux';

import configureStore from './ConfigureStore';

import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';

import NavigatorRoot from './Views/NavigatorRoot'


const store = configureStore();

export default class App extends Component{
    constructor(props)
    {
        super(props);
    }


    render(){
        return(
	        <Provider store={store}>
                <NavigatorRoot />
	        </Provider>

        );
    }
}

const styles = StyleSheet.create({
    root : {
    	flex:1
    }
});