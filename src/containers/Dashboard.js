import React from 'react'
import { connect } from 'react-redux'

const Canines = ({ canines }) => {
  return <div>{canines.map((d, i) => <p key={i}>{d}</p>)}</div>
}

const mapStateToProps = state => ({
  canines: state.canines
})

const Dashboard = connect(mapStateToProps)(Canines)

export default Dashboard
