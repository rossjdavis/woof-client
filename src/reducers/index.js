import { combineReducers } from 'redux'

import socketReducer from './websockets'
import canineReducer from './canines'

export const reducers = combineReducers({ socketReducer, canineReducer })
