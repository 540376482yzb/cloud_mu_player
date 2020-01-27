import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";
import logger from 'redux-logger';
import { rootReducerMap } from './reducer'

const loadState = () => {
  // try {
  //   const serializedState = AsyncStorage.getItem("state")
  //   if (!serializedState) return undefined
  //   return JSON.parse(serializedState)
  // } catch (err) {
  //   return undefined
  // }
}

const saveState = async state => {
  // try {
  // 	const serializedState = JSON.stringify(state)
  // 	await AsyncStorage.setItem("state", serializedState)
  // } catch (error) {
  // 	console.log("save error", error)
  // }
}

console.log('root reducer map', rootReducerMap)

export const rootReducer = combineReducers(rootReducerMap);

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

store.subscribe(() => {
  saveState(store.getState())
})