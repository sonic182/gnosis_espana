import React, { Component } from 'react'
import {
	ScrollView,
	Text,
	StyleSheet,
} from 'react-native'

export default class Post extends Component{

	render(){
		const {title, content} = this.props.post
		return (
			<ScrollView style={styles.container}>
			<Text style={styles.title}>
					{title}
				</Text>
				<Text style={styles.content}>
					{content}
				</Text>
			</ScrollView>
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
