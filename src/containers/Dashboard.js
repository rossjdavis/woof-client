import React from 'react'
import { connect } from 'react-redux'

const Canines = ({ canines }) => {
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

const Dashboard = connect(mapStateToProps)(Canines)

export default Dashboard
