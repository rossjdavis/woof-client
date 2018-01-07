import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// import { reducers } from './reducers/index'

import canineReducer from './reducers/canines'

import { init as listen, emit } from './actions/websockets'

// const store = createStore(canineReducer, applyMiddleware(thunk))
//
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

// console.log(store.getState())
//
// store.subscribe(() => {
//   console.log(store.getState())
// })

ReactDOM.render(
  <Provider store={startup()}>
    {/* <Router> */}
    <App />
    {/* </Router> */}
  </Provider>,
  document.getElementById('root')
)
