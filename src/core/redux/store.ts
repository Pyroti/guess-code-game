import { legacy_createStore as createStore } from 'redux'
import MysteryNumbersReducer from './reducers/mysteryNumbersReducer'

export const store = createStore(MysteryNumbersReducer)
