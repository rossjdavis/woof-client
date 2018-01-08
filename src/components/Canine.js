import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Canine = ({ view }) => {
  return !view ? (
    <Redirect to="/" />
  ) : (
    <div>
      <h2> {view.name}</h2>
      <p> Birthday: {view.born} </p>
      <p> About Me: {view.intro} </p>
    </div>
  )
}

const matchStateToProps = state => ({
  view: state.canines.view
})

export default connect(matchStateToProps)(Canine)
