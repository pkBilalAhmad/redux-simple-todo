import { createStore, combineReducers } from 'redux';
import { data } from './data'
export const store = createStore(combineReducers({
    data
}))