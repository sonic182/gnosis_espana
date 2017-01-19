import { combineReducers } from 'redux'
import {
	PUSH_ROUTE,
	POP_ROUTE,
	SET_NAVIGATOR,
 } from './actions'


const initialState = {
	// navigator: null,
	stack: []
}

function navigationApp(state = initialState, action) {
  switch(action.type){
		case PUSH_ROUTE:
		return Object.assign({}, state, {
			navigator: state.navigator.push(action.route)
		})
		case POP_ROUTE:
		state.stack.pop()
		return Object.assign({}, state, {
			navigator: state.navigator.pop(),
			stack: state.stack,
		})
		case SET_NAVIGATOR:
		return Object.assign({}, state, {
			navigator: action.navigator,
			stack: [action.route]
		})
		default:
		return state;
	}
}

export default combineReducers({
	navigationApp,
})
