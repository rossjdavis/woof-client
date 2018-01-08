import React from 'react'
import { connect } from 'react-redux'
import { createCanine } from '../actions/canines'
import { assignValues } from '../actions/forms'
import DateDropdown from './DateDropdown'

const Canine = ({ history, onAssign, onCreate, date, canine }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onAssign(e.target[0].value, date)
        onCreate(canine)
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
  date: state.forms.date,
  canine: state.forms.canine
})

const mapDispatchToProps = dispatch => ({
  onAssign: (name, date) => dispatch(assignValues(name, date)),
  onCreate: canine => dispatch(createCanine(canine))
})

const CanineForm = connect(mapStateToProps, mapDispatchToProps)(Canine)

export default CanineForm
