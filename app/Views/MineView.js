/**
 * Created by Administrator on 2017/3/28.
 */
import React,{Component} from 'react'
import {
	Image,
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity
} from 'react-native'


export default class MineView extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			Promise: {}
		}
	}
	render()
	{
		return(
			<View>
				<TouchableOpacity
					onPress = {this._openweibo.bind(this)}
				>
					<Text>Open weibo</Text>
				</TouchableOpacity>
			</View>
		);
	}

	_openweibo()
	{

	}
}