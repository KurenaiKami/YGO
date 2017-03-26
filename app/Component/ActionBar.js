import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    ToolbarAndroid,
    View
} from 'react-native';

export default class ActionBar extends Component
{
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        icon: React.PropTypes.number,
        onIconClicked : React.PropTypes.func,
        actions: React.PropTypes.array,
        onActionSelected: React.PropTypes.func
    }

    static get defaultProps()
    {
        return{
            title:'标题',
            icon: require('../Resources/Images/ic_arrow_back_white_24dp.png'),
            onIconClicked: undefined,
            actions: [],
            onActionSelected: undefined
        }
    }

    render(){
        return(
            <View>
                <ToolbarAndroid
                    style = {styles.toolbar}
                    navIcon={this.props.icon}
                    onIconClicked={this.props.onIconClicked}
                    actions = {this.props.actions}
                    onActionSelected={this.props.onActionSelected}
                    titleColor="#ffffff"
                    title={this.props.title}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    toolbar:{
        backgroundColor: '#03a9f4',
        height: 56,
    }
});