import React from 'react'
import { connect } from 'react-redux'
import { createCanine } from '../actions/canines'
import DateDropdown from './DateDropdown'

const Canine = ({ history, onCreate, date }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onCreate(assignValues(e.target[0].value, date))
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

const assignValues = (name, date) => ({
  name: name,
  date: date
})

const mapStateToProps = state => ({
  date: state.forms.date
})

const mapDispatchToProps = dispatch => ({
  onCreate: canine => dispatch(createCanine(canine))
})

const CanineForm = connect(mapStateToProps, mapDispatchToProps)(Canine)

export default CanineForm
