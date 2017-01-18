import React, {Component} from 'react';

import {
	View,
	ScrollView,
	Text,
	StyleSheet,
} from 'react-native';

import Option from './option';

export default class Options extends Component{

	render () {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.optionsContainer}>
					<Option icon='newspaper-o' text='Noticias'/>
					<Option icon='globe' text='Sedes'/>
				</View>
				<View style={styles.optionsContainer}>
					<Option icon='microphone' text='Conferencias'/>
					<Option icon='book' text='Libros'/>
				</View>
				<View style={styles.optionsContainer}>
					<Option icon='headphones' text='Audios'/>
					<Option icon='commenting' text='Chats'/>
				</View>
				<View style={styles.optionsContainer}>
					<Option icon='facebook-square' text='Facebook'/>
					<Option icon='twitter-square' text='Twitter'/>
				</View>
				<View style={styles.optionsContainer}>
					<Option icon='cog' text='Configuración'/>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
		// flexDirection: 'column',
		flexDirection: 'column',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // backgroundColor: '#dddddd',
		// paddingVertical: 15,
  },
	optionsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		// backgroundColor: '#bbb',
		paddingVertical: 10,
	}
});
