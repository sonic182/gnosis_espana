import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default class Option extends Component{
	render () {
		return (
			<View style={styles.container}>
				<Icon
				style={styles.icon}
				name={this.props.icon}
				size={this.props.size || 42}
				color={this.props.color || '#444444'} />
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
		// flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    // alignSelf: 'stretch',
    backgroundColor: '#ddd',
		// paddingVertical: 15,
		width: 150,
		paddingVertical: 15,
  },
	icon: {

	},
	text: {
		fontSize: 22,
	}
});
