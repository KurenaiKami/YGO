import React,{Component} from 'react'
import
{
	StyleSheet,
	Image,
	View,
	Text,
	TouchableNativeFeedback
}  from 'react-native'


import Constants from '../../Common/Constants'

export default class VideoCell extends Component
{
	render(){
		let {category} = this.props;
		return(
			<TouchableNativeFeedback
				onPress={this.props.touchAction}
			>
				<Image
					source={{uri: image_list[0] }}
				    style={styles.image}
				/>
			</TouchableNativeFeedback>
		);
	}
}

const styles = StyleSheet.create({
	image:{

	}
})