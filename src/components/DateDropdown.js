import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { selectYear, selectMonth, selectDay } from '../actions/forms'

const DateDropdown = ({ selectYear, date }) => {
  let base = moment().year() - 14

  let days = new Date(base, moment().month() + 1, 0).getDate()

  // let days = [...Array(date).keys()].map((d, i) => (
  //   <option value={d + 1} key={i}>
  //     {d + 1}
  //   </option>
  // ))

  // console.log(moment(`${base}-01`, 'YYYY-MM'))
  console.log(date)
  return (
    <div>
      <select name="month" defaultValue="month">
        <option value="month" disabled hidden>
          Month
        </option>
        {optionsList(12)}
      </select>
      <select name="day" defaultValue="day">
        <option value="day" disabled hidden>
          Day
        </option>
        {optionsList(date)}
      </select>
      <select
        name="year"
        defaultValue="year"
        onChange={e => {
          selectYear(e.target.value)
        }}
      >
        <option value="year" disabled hidden>
          Year
        </option>
        {optionsList(15, base)}
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
  date: state.date
})

const mapDispatchToProps = dispatch => ({
  selectYear: year => dispatch(selectYear(year))
})

export default connect(mapStateToProps, mapDispatchToProps)(DateDropdown)
