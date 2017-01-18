/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Main from './app/main';

export default class gnosisespana extends Component {
  render() {
    return (
      <Main/>
    );
  }
}


AppRegistry.registerComponent('gnosisespana', () => gnosisespana);
