import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as actions from '../actions/forms'
import { bindActionCreators } from 'redux'

const DateDropdown = ({ actions, month, day, year }) => {
  let days = new Date(year, month, 0).getDate()

  return (
    <div>
      <select
        name="month"
        defaultValue="month"
        onChange={e => {
          actions.selectMonth(e.target.value)
        }}
      >
        <option value="month" disabled hidden>
          Month
        </option>
        {optionsList(12)}
      </select>
      <select
        name="day"
        defaultValue="day"
        onChange={e => {
          actions.selectDay(e.target.value)
        }}
      >
        <option value="day" disabled hidden>
          Day
        </option>
        {optionsList(days)}
      </select>
      <select
        name="year"
        defaultValue="year"
        onChange={e => {
          actions.selectYear(e.target.value)
        }}
      >
        <option value="year" disabled hidden>
          Year
        </option>
        {optionsList(15, moment().year() - 14)}
      </select>
    </div>
  )
}

const optionsList = (range, base = 1) =>
  [...Array(range).keys()].map(d => (
    <option value={d + base} key={d}>
      {d + base}
    </option>
  ))

const mapStateToProps = state => ({
  month: state.forms.month,
  day: state.forms.day,
  year: state.forms.year
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DateDropdown)
