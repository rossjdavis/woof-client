import React from 'react'
import { connect } from 'react-redux'
import { createCanine } from '../actions/canines'
import DateDropdown from './DateDropdown'

const Canine = ({ history, onCreate }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onCreate({ name: e.target[0].value })
      }}
    >
      <p>
        Name:
        <input type="text" name="name" />
      </p>
      <div>
        Birthday:
        <DateDropdown />
      </div>
      <input type="submit" value="+ Canine" />
    </form>
  )
}

const mapStateToProps = state => ({
  state: state.newCanine
})

const mapDispatchToProps = dispatch => ({
  onCreate: newCanine => dispatch(createCanine({ newCanine }))
})

const CanineForm = connect(mapStateToProps, mapDispatchToProps)(Canine)

export default CanineForm
