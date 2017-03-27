import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'

import Constants from '../../Common/Constants'

export default class AdCell extends Component
{
    render(){
        let {category} = this.props;

        return(
            <TouchableOpacity
                onPress = {this.props.touchAction}
            >
                <View style={styles.row}>
                    <Text style={styles.titleFont}>
                        {category.title}
                    </Text>
                    <Image source={{uri: category.thumbnail_pic_s }}  style={styles.imageStyle} />
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        paddingTop: Constants.window.margin,
        paddingBottom: Constants.window.margin,
        marginLeft: Constants.window.margin,
        marginRight: Constants.window.margin,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(131,131,131,0.6)"
    },
    titleFont:{
        fontWeight:"bold",
        fontSize: 16
    },
    imageStyle:{
        width: Constants.window.width - Constants.window.margin*2,
        height: 150,
        marginTop:5
    }

})