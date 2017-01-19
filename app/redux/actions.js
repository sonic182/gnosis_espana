/*
 * action types
 */

export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'
export const SET_NAVIGATOR = 'SET_NAVIGATOR'

export function pushRoute(route) {
  return { type: PUSH_ROUTE, route }
}

export function popRoute(route) {
  return { type: POP_ROUTE, route }
}

export function setNavigator(navigator, route) {
  return { type: SET_NAVIGATOR, navigator: navigator }
}
