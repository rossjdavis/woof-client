import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeCanine } from '../actions/canines'
import { setActive } from '../actions/canines'
import CanineForm from '../components/CanineForm'

const styleView = {
  display: 'flex',
  flexDirection: 'column',
  width: 750,
  margin: '0 auto'
}

const styleList = {
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center'
}

const styleDogs = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'lightgrey',
  borderRadius: 20,
  margin: 10
}

const styleName = {
  padding: 5
}

const styleImage = {
  width: 150,
  height: 150,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20
}

const Canines = ({ canines, onRemove, onActive, history }) => {
  let list = !canines ? (
    <p>Loading...</p>
  ) : (
    canines.map((d, i) => (
      <div key={i} style={styleDogs}>
        <img
          className="img-responsive"
          style={styleImage}
          src={d.image}
          onClick={e => {
            e.preventDefault()
            onActive(d)
            history.push('/view-canine')
          }}
        />
        <span style={styleName}>{d.name}</span>
        {/* <button
          onClick={e => {
            e.preventDefault()
            onRemove(d._id)
          }}
        >
          X
        </button> */}
      </div>
    ))
  )
  return (
    <div className="dogs-list" style={styleView}>
      <div style={styleList}>{list} </div>
      {/* <CanineForm /> */}
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
