import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
	pushRoute,
} from '../../redux/actions'

class Option extends Component{
	render () {
		return (
			<TouchableHighlight onPress={() => {
				this.props.pushRoute()
			}}>
				<View style={styles.container}>
					<Icon
					style={styles.icon}
					name={this.props.icon}
					size={this.props.size || 42}
					color={this.props.color || '#444444'} />
					<Text style={styles.text}>{this.props.text}</Text>
				</View>
			</TouchableHighlight>
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

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		pushRoute: () => {
			dispatch(pushRoute(ownProps.route))
		},
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Option)
