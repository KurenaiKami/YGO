/**
 * Created by Administrator on 2017/3/28.
 */
import React,{Component} from 'react'
import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableNativeFeedback
} from 'react-native';

import Constants from '../../Common/Constants'

export default class MultiImageCell extends Component
{
	render(){
		let {category} = this.props;

		return(
			<TouchableNativeFeedback
				onPress = {this.props.touchAction}
			>
				<View style={styles.row}>
					<Text
						style={styles.titleFont}
						numberOfLines={1}
					>
						{category.title}
					</Text>

					<View style={styles.mulContainer}>
						{
							category.image_list.map((imgObj,i) => {
								console.log("image");
								console.log(imgObj);
								return(
									<Image
										key={i}
									    source={{uri: imgObj}}
									    style={styles.imgmul}
									/>
								);
							})
						}
					</View>
				</View>
			</TouchableNativeFeedback>
		);
	}

}

const styles = StyleSheet.create({
	row:{
		paddingTop: Constants.window.margin,
		paddingBottom: Constants.window.margin,
		marginRight: Constants.window.margin,
		marginLeft: Constants.window.margin,
		borderBottomWidth: 0.5,
		backgroundColor: 'white',
		borderBottomColor: 'rgba(131, 131, 131, 0.6)'
	},
	titleFont:{
		fontWeight:'bold',
		fontSize: 16
	},
	mulContainer:{
		flexDirection:'row',
		justifyContent:'space-between',
		marginTop:7.5
	},
	imgmul:{
		height: 80,
		width: (Constants.window.width - 3*Constants.window.margin ) / 3
	}
})

