import React,{Component} from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

import Constant from '../../Common/Constants'

export default class SingleImageCell extends Component{
	render()
	{
		let {category} = this.props;
		return(
			<TouchableOpacity
				onPress = {this.props.touchAction}
			>
				<View style={styles.row}>
					<Image source={{uri: category.image_list[0].src }}  style={styles.newsSingleImage} />

					<View style={styles.titleContainer}>
						<Text style={styles.titleFont} numberOfLines={1}>{category.title}</Text>
						<Text style={styles.introFont} numberOfLines={1} >{category.intro}</Text>
					</View>

					<View>
						<Text>{category.pv}</Text>
					</View>
				</View>

			</TouchableOpacity>
		);
	}
}


const styles = StyleSheet.create({
	row:{
		flexDirection: 'row',
		paddingTop: Constant.window.margin,
		paddingBottom: Constant.window.margin,
		marginRight: Constant.window.margin,
		marginLeft: Constant.window.margin,
		borderBottomWidth: 0.5,
		borderBottomColor: 'rgba(131, 131, 131, 0.6)'
	},
	pvImage: {width: 15, height: 10},
	newsSingleImage: {height: 70, width: 95},
	titleContainer:{
		marginLeft:Constant.window.margin
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