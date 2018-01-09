import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/forms'
import { bindActionCreators } from 'redux'
// import moment from 'moment'

const DateDropdown = ({ actions, date }) => {
  let days = new Date(date.year, date.month, 0).getDate()

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
        {optionList(12)}
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
        {optionList(days)}
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
        {optionList(15, date.base)}
      </select>
    </div>
  )
}

const optionList = (range, base = 1) =>
  [...Array(range).keys()].map(d => (
    <option value={d + base} key={d}>
      {d + base}
    </option>
  ))

// list should not include days that have not yet passed
// const reduceList = (list, moment, year) => {
//   list.reduce((d, i) => {
//     if (year !== moment().year) {
//     }
//   })
// }

const mapStateToProps = state => ({
  date: {
    month: state.forms.date.month,
    day: state.forms.date.day,
    year: state.forms.date.year,
    base: state.forms.date.base
  }
})

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DateDropdown)
