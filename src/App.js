import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import io from 'socket.io-client'
//
import { showDogs } from './actions/canines'

// import * as actions from './actions'

import Dashboard from './containers/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)

    // const endpoint = 'http://localhost:3001'
    // const socket = io.connect(endpoint)
    //
    // socket.on('LOAD_ALL_DOGS', payload => {
    //   dispatch(loadCanines(payload))
    // })
  }

  componentWillMount() {
    const { canines, onIndex } = this.props
    const socket = io.connect('http://localhost:3001')

    socket.on('LOAD_ALL_DOGS', payload => {
      onIndex(payload)
    })
  }

  render() {
    return <Dashboard />
  }
}

const mapStateToProps = state => ({
  canines: state.canines
})

const mapDispatchToProps = dispatch => ({
  onIndex: canines => {
    dispatch(showDogs(canines))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
