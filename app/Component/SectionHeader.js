/**
 * Created by Administrator on 2017/4/20.
 */
import React,{Component} from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import Constants from '../Common/Constants';

export default class SectionHeader extends Component{
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>{this.props.title}</Text>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		width: Constants.window.width,
		justifyContent: 'center',
		height: 44,
		padding: 10,
		backgroundColor: 'rgb(246, 246, 246)',
	},

	header: {
		paddingLeft: 8,
		borderLeftColor: "#03a9f4",
		borderLeftWidth: 5,
		paddingTop: 5,
		paddingBottom: 5,
	},

	title: {
		fontWeight: 'bold',
		fontSize: 15,
	}
})