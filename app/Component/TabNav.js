import React,{Component} from 'react';
import
{
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';


const TabNavs = [
    {
        title: '资讯',
        icon_n: require(''),
        icon_s : require(''),
    },
    {

    },
    {

    }
];

export default class TabNav extends Component
{


    render()
    {


        return(
            <View style={styles.root}>
                <TabNavigator tabBarStyle={styles.tab}>
                    {tabItems}
                </TabNavigator>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    container:{

    },
    tab:{

    }
});