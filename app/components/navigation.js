import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	setNavigator,
	pushRoute,
	popRoute,
 } from '../redux/actions'
import {
	Navigator,
	Text,
	StyleSheet,
	BackAndroid,
	Image,
} from 'react-native';

import Options from './home/options';
import News from './news/news';
import Post from './news/post';

import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = (<Icon name="rocket" size={30} color="#900" />)

class Nav extends Component {

	constructor(props){
		super(props);
		this.routes = [
			{ title: 'Home', index: 0 },
			{ title: 'News', index: 1 },
			{ title: 'Post', index: 2, post: {url: null}},
		]
	}

	componentDidMount(){
		this.props.setNavigator({navigator: this.navigator, route: this.routes[0]})

		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (this.navigator.getCurrentRoutes().length === 1  ) {
				return false;
			}
			this.props.popRoute();
			return true;
		});
	}

	render (){
		return (
			<Navigator
			ref={(ref)=>{
				if (ref)
					this.navigator = ref;
			}}
			initialRoute={this.routes[0]}
			navigationBar={
			     <Navigator.NavigationBar
			       routeMapper={{
			         LeftButton: (route, navigator, index, navState) => {
								 return (<Image style={{height: 50, width: 50, marginTop: 4,padding: 15}} source={require('../assets/images/sol_acuario.png')}/>)
								//  return (<Icon name="bars" size={22} style={{padding: 15}} color="white" />);
							 },
			         RightButton: (route, navigator, index, navState) =>
			           { return (<Text/>); },
			          //  { return (<Icon name="search" size={22} style={{padding: 15}} color="white" />); },
			         Title: (route, navigator, index, navState) =>
			           { return (
									 <Text style={{color: 'white', fontSize: 18, paddingVertical: 15}}>
									 Gnosis España
									 </Text>); },
			       }}
			       style={styles.navBar}
			     />
			  }
			renderScene={(route, navigator) =>{

				switch(route.title){
					case 'Home': return (
						<Options/>
					)
					case 'News': return (
						<News/>
					)
					case 'Post': return (
						<Post post={route.post}/>
					)
					default: return (
						<Text>
						Error rendering view, you may haven't included in navigation
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
		backgroundColor: '#eee',
		paddingTop: 55,
	},
	navBar: {
		backgroundColor: '#145694',
	}
})

const mapStateToProps = (state, ownProps) => {
	return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
		setNavigator: (navigator) => {
			dispatch(setNavigator(navigator))
		},
		pushRoute: () => {
			dispatch(pushRoute(ownProps.route))
		},
		popRoute: () => {
			dispatch(popRoute())
		},
  }
}

const ReduxNavigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

export default ReduxNavigator;
