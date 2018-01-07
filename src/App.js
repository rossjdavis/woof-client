import React, { Component } from 'react'

import { connect } from 'react-redux'
import SocketIoClient from 'socket.io-client'
//
// import { newSocket } from './actions/websockets'
import { showDogsList } from './actions/canines'
import { bindActionCreators } from 'redux'
import * as actions from './actions/canines'

import Dashboard from './containers/Dashboard'

let socket

class App extends Component {
  constructor(props) {
    super(props)

    // const { dispatch } = this.props
    // socket = SocketIoClient('http://localhost:3001')
    //
    // socket.on('LOAD_ALL_DOGS', payload => {
    //   dispatch(showDogsList(payload))
    // })
  }

  componentWillMount() {
    console.log(actions)
  }

  // componentWillMount() {
  //   const { initSocket } = this.props
  //   initSocket()
  // }
  //
  // componentDidMount() {
  //   const { socket, onIndex } = this.props
  //
  //   socket.on('LOAD_ALL_DOGS', payload => {
  //     onIndex(payload)
  //   })
  // }

  render() {
    return <Dashboard />
  }
}

const mapStateToProps = state => ({
  canines: state.canines
  // socket: state.socket
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    actions: bindActionCreators(actions, dispatch)
  }
}

// const mapDispatchToProps = dispatch => ({
//   // initSocket: () => {
//   //   dispatch(newSocket())
//   // },
//   onIndex: canines => {
//     dispatch(showDogsList(canines))
//   }
// })

export default connect(mapStateToProps)(App)
