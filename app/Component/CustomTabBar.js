import React ,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class CustomTabBar extends Component
{
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        backgroundColor: React.PropTypes.string,
        activeTextColor: React.PropTypes.string,
        inactiveTextColor: React.PropTypes.string,
        textStyle: Text.propTypes.style,
        tabStyle: View.propTypes.style,
        renderTab: React.PropTypes.func,
        underlineStyle: View.propTypes.style,
        tabNames: React.PropTypes.array,
        tabIconName: React.PropTypes.array
    }

    setAnimationValue(value)
    {
        console.log(value);
    }

    componentDidMount(){
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTab(tab,page){
        let color = this.props.activeTab == page ? "#E6DE45" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return(
            <TouchableOpacity
                onPress = { () => this.props.goToPage(page) }
                style={styles.tab}
                key={page}
            >
                <View style={styles.tabItem}>
                    <Icon name = {this.props.tabIconName[page] }
                    size = {30}
                    color={color} />
                    <Text style={color={color}}>
                        {this.props.tabNames[page]}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        return(
            <View style={styles.tabs}>
                {this.props.tabs.map( (tab,page) => this.renderTab(tab,page) )}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    tabs:{
        flexDirection:'row',
        height:50
    },
    tab:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tabItem:{
        flexDirection:'column',
        alignItems:'center'
    }

});