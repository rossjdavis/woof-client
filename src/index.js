import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import canineReducer from './reducers/canines'

import { init as listen, emit } from './actions/websockets'

function startup() {
  const middleware = [thunk.withExtraArgument({ emit })]
  const store = createStore(canineReducer, applyMiddleware(...middleware))

  console.log('initializing')

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
