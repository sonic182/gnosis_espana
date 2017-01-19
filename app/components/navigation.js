import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	setNavigator,
	pushRoute,
 } from '../redux/actions'
import {
	Navigator,
	Text,
	StyleSheet,
} from 'react-native';

import Options from './home/options';


class Nav extends Component {

	constructor(props){
		super(props);
		this.routes = [
			{ title: 'Home', index: 0 },
			{ title: 'News', index: 1 },
		]
	}

	componentDidMount(){
		this.props.setNavigator(this.navigator)
	}

	render (){
		return (
			<Navigator
			ref={(ref)=>{
				if (ref)
					this.navigator = ref;
			}}
			initialRoute={this.routes[0]}
			renderScene={(route, navigator) =>{

				switch(route.title){
					case 'Home': return (
						<Options/>
					)
					case 'News': return (
						<Text>
						News View
						</Text>
					)
					default: return (
						<Text>
						Error rendering view
						</Text>
					)
				}
			}}
			style={styles.navigator}
			/>
		)
	}

}

const styles = StyleSheet.create({
	navigator: {

	}
})

const mapStateToProps = (state, ownProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		setNavigator: (navigator) => {
			dispatch(setNavigator(navigator))
		},
		pushRoute: () => {
			dispatch(pushRoute(ownProps.route))
		},
  }
}

const ReduxNavigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default ReduxNavigator;
