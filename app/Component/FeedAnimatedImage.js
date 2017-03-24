/**
 * Created by Administrator on 2017/3/24.
 */
import React,{Component} from 'react';

import {
	Animated,
	propTypes
} from 'react-native';

export default class FeedAnimatedImage extends Component
{
	static propTypes = {
		source: React.PropTypes.string.isRequired,
		inputRange: React.PropTypes.array.isRequired,
		outputRange: React.PropTypes.array.isRequired,
	};

	render() {
		this._animatedValue = new Animated.Value(0);
		let interpolatedColorAnimation = this._animatedValue.interpolate({
			inputRange: this.props.inputRange,
			outputRange: this.props.outputRange
		});

		return (
			<Animated.Image
				onLoadEnd={() => {
                    Animated.timing(this._animatedValue, {
                        toValue: 100,
                        duration: 500
                    }).start();
                }}
				onLoad={this.props.onLoad ? this.props.onLoad : ()=>{}}
				source={{uri: this.props.source}}
				style={[this.props.style, {opacity: interpolatedColorAnimation}]} />
		);
	}
}