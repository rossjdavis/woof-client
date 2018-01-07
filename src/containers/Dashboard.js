import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { showDogsList } from '../actions/canines'

import * as actions from '../actions'

const Canines = ({ canines }) => {
  // socket.on('LOAD_ALL_DOGS', payload => {
  //   onIndex(payload)
  // })
  let list = !canines ? (
    <p>Loading...</p>
  ) : (
    canines.map((d, i) => <p key={i}>{d.name}</p>)
  )
  return <div>{list}</div>
}

const mapStateToProps = state => ({
  canines: state.canines
})

// const mapDispatchToProps = dispatch => ({
//   onIndex: canines => {
//     dispatch(showDogsList(canines))
//   }
// })

function mapDispatchToProps(dispatch) {
  // return {
  //   dispatch: dispatch,
  //   actions: bindActionCreators(actions, dispatch)
  // }
}

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Canines)

export default Dashboard
