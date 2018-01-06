import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import canineReducer from './reducers/canines'
import { init as listen, emit } from './actions/websockets'
import { List, Map } from 'immutable'

const initialState = new Map().set('canines', new List())

function startup() {
  const middleware = [thunkMiddleware.withExtraArgument({ emit })]
  const store = createStore(
    canineReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  console.log(store.getState())

  store.subscribe(() => {
    console.log(store.getState())
  })

  listen(store)
  return store
}

ReactDOM.render(
  <Provider store={startup()}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
