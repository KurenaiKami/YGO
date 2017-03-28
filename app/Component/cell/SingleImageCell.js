import React,{Component} from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import Constants from '../../Common/Constants'

export default class SingleImageCell extends Component{
	render()
	{
		let {category} = this.props;
		return(
			<TouchableOpacity
				onPress = {this.props.touchAction}
			>
				<View style={styles.row}>
					<Image source={{uri: category.picUrl }}  style={styles.newsSingleImage} />

					<View style={styles.titleContainer}>
						<Text style={styles.titleFont} numberOfLines={1}>{category.title}</Text>
						<Text style={styles.introFont} numberOfLines={1} >{category.description}</Text>
					</View>

					<View>
						<Text>{category.ctime}</Text>
					</View>
				</View>

			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		paddingTop: Constants.window.margin,
		paddingBottom: Constants.window.margin,
		marginRight: Constants.window.margin,
		marginLeft: Constants.window.margin,
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgba(131, 131, 131, 0.6)'
	},
	pvImage: {width: 15, height: 10},
	newsSingleImage: {height: 70, width: 95},
	titleContainer:{
		marginLeft:Constants.window.margin
	},
	titleFont:{
		fontWeight:'bold',
		fontSize: 16
	},
	introFont:{
		color:'gray',
		fontSize:14,
		marginTop:7
	}
})