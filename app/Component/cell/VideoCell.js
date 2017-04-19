import React,{Component} from 'react'
import
{
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity
}  from 'react-native'


import Constants from '../../Common/Constants'

export default class VideoCell extends Component
{
	render(){
		let {category} = this.props;
		return(
			<TouchableOpacity
				onPress={this.props.touchAction}
			    style = {styles.container}
			    activeOpacity={0.75}
			>
				<Image
					source={{uri: category.image }}
				    style={styles.image}
				/>

				< Text style={styles.titleFont}>{category.title}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		marginTop: 10,
		marginLeft: 10,
		marginBottom: 10,
		width: Constants.window.width - 20,
		borderBottomColor: '#ccc',
		borderBottomWidth: 0.5
	},
	image:{
		justifyContent: 'center',
		alignItems: 'center',
		width: Constants.window.width - 10 * 2,
		height: 170,
	},
	titleFont: {
		marginTop: 12,
		fontSize: 16,
		fontWeight: 'bold',
	},
})