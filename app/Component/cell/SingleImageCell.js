import React,{Component} from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableNativeFeedback
} from 'react-native'

import Constants from '../../Common/Constants'

export default class SingleImageCell extends Component{
	render()
	{
		let {category} = this.props;
		return(
			<TouchableNativeFeedback
				onPress = {this.props.touchAction}
			>
				<View style={styles.row}>
					<Image source={{uri: category.image_list[0] }}  style={styles.newsSingleImage} />

					<View style={styles.itemDescription}>
						<Text style={styles.itemTitle}
						      numberOfLines={4}>
							{category.title}
						</Text>

						<View style={styles.detail}>
							<Text style={styles.author}
							      numberOfLines={1}>
								{category.author}
							</Text>

							<Text style={styles.time}>
								{category.time}
							</Text>
						</View>


					</View>

				</View>

			</TouchableNativeFeedback>
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
		backgroundColor: 'white',
		borderBottomColor: 'rgba(131, 131, 131, 0.7)',
	},
	pvImage: {width: 15, height: 10},
	newsSingleImage: {height: 70, width: 95},
	itemDescription: {
		flex: 1,
		marginLeft: 8,
		marginRight: 8,
		marginBottom: 8,
	},
	itemTitle: {
		flex: 1,
		color: 'black',
		fontSize: 16,
	},
	detail: {
		flexDirection:'row',
		justifyContent:'space-between'
	},
	author:{
		color:'gray'
	},
	time: {
		color: 'gray',
	},
})