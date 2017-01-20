import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import gnosisApp from './redux/reducers';

import ReduxNavigator from './components/navigation';

let store = createStore(gnosisApp);


export default class Main extends Component{

	render () {
		return (
			<Provider store={store}>
				<ReduxNavigator/>
			</Provider>
		)
	}
}
