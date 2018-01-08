import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCanine } from '../actions/canines'
import { setActive } from '../actions/canines'
import CanineForm from '../components/CanineForm'

const dashboard = {
  display: 'flex',
  flexDirection: 'column'
}

const styleList = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between'
}

const styleDogs = {
  display: 'flex'
}

const Canines = ({ canines, onRemove, onActive, history }) => {
  let list = !canines ? (
    <p>Loading...</p>
  ) : (
    canines.map((d, i) => (
      <div key={i} style={styleDogs}>
        <h3>{d.name}</h3>
        <button
          onClick={e => {
            e.preventDefault()
            onActive(d)
            history.push('/view-canine')
          }}
        >
          Profile
        </button>
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
    <div className="dogs-list" style={dashboard}>
      <div style={styleList}>{list} </div>
      <CanineForm />
    </div>
  )
}

const mapStateToProps = state => ({
  canines: state.canines.index
})

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeCanine(id)),
  onActive: canine => dispatch(setActive(canine))
})

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(Canines)

export default Dashboard
