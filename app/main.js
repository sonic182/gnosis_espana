import React, { Component } from 'react';

import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import Options from './components/home/options';


export default class Main extends Component{

	render () {
		return (
			<View>
				<Options/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
