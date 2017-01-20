/*
 * action types
 */

export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'
export const SET_NAVIGATOR = 'SET_NAVIGATOR'

export function pushRoute(route) {
  return { type: PUSH_ROUTE, route }
}

export function popRoute() {
  return { type: POP_ROUTE }
}

export function setNavigator({navigator, route}) {
  return { type: SET_NAVIGATOR, navigator: navigator, route: route }
}
