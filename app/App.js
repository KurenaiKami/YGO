import React ,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

import ScrollableTabView,{DefaultTabBar} from 'react-native-scrollable-tab-view';

import TabHome from './Views/TabHome'

export default class App extends Component{
    constructor(props)
    {
        super(props);
        // this.state = {
        //     tabNames:['资讯','攻略','卡组','周边'],
        //     tabIconNames:['ios-home', 'logo-freebsd-devil', 'md-filing', 'md-appstore']
        // }
    }

    render(){
        return(
            // <ScrollableTabView
            //     style={styles.root}
            //     tabBarPosition= "overlayBottom"
            //     renderTabBar={ () =>  <CustomTabBar tabNames={this.state.tabNames} tabIconName={this.state.tabIconNames}     /> }
            // >
            //     <View tabLabel="'key1">
            //         <Text>1</Text>
            //     </View>
            //
            //     <View tabLabel="'key2">
            //
            //         <Text>1</Text>
            //     </View>
            //
            //     <View tabLabel="'key3">
            //
            //         <Text>1</Text>
            //     </View>
            //
            //     <View tabLabel="'key4">
            //
            //         <Text>1</Text>
            //     </View>
            // </ScrollableTabView>
	        <TabHome />

        );
    }
}

const styles = StyleSheet.create({
    root : {
    }
});