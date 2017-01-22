import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
} from 'react-native'

export default class PostList extends Component{

	render(){
		const {title, content} = this.props.post

		return(
			<TouchableHighlight onPress={()=> this.props.onClick()}>
				<View style={styles.container}>
					<Text style={styles.title}>
						{title}
					</Text>
					<Text style={styles.content}>
						{content.length > 150 ? `${content.substr(0, 150)}...` : content}
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		marginVertical: 15,
		backgroundColor: '#fff'
	},
	title: {
		color: '#159865',
		fontSize: 16
	},
	content: {
		color: '#222222'
	}
})
