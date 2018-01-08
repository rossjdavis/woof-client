import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeCanine } from '../actions/canines'

import CanineForm from '../components/CanineForm'

const Canines = ({ canines, onRemove }) => {
  let list = !canines ? (
    <p>Loading...</p>
  ) : (
    canines.map((d, i) => (
      <div key={i}>
        <Link to={`/canines/${d._id}`}>{d.name}</Link>
        <button
          onClick={e => {
            e.preventDefault()
            onRemove(d._id)
          }}
        >
          X
        </button>
      </div>
    ))
  )
  return (
    <div className="dogs-list">
      {list} <CanineForm />
    </div>
  )
}

const mapStateToProps = state => ({
  canines: state.canines
})

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeCanine(id))
})

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Canines)

export default Dashboard
