import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { auths } from './reducers/auths'
import { canines } from './reducers/canines'
import { forms } from './reducers/forms'

import { init as listen, emit } from './actions/websockets'

import { setSession } from './actions/auths'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const reducer = combineReducers({ auths, canines, forms })

function startup() {
  const middleware = [thunk.withExtraArgument({ emit })]
  const store = createStore(reducer, applyMiddleware(...middleware))

  console.log('initializing')

  store.subscribe(() => {
    console.log(store.getState())
    console.log('session ' + sessionStorage.getItem('token'))
    setSession(store.getState().auths.token)
  })

  listen(store)

  return store
}

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={startup()}>
      <Router>
        <App />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
