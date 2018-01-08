import React from 'react'
import { connect } from 'react-redux'
import { createCanine } from '../actions/canines'
import DateDropdown from './DateDropdown'

const Canine = ({ history, onCreate, date }) => {
  let born = `${date.month}-${date.day}-${date.year}`
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        onCreate(e.target[0].value, born)
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
  date: state.forms.date
})

const mapDispatchToProps = dispatch => ({
  onCreate: (name, date) => dispatch(createCanine(name, date))
})

const CanineForm = connect(mapStateToProps, mapDispatchToProps)(Canine)

export default CanineForm
