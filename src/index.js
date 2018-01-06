import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import canineReducer from './reducers/canines'

import { init as listen, emit } from './actions/websockets'

function startup() {
  const store = createStore(canineReducer)

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
