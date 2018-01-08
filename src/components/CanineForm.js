import React from 'react'
import { connect } from 'react-redux'
// import { createCanine } from './actions/canines'

import moment from 'moment'

const Canine = ({ history }) => {
  let date = new Date(moment().year(), moment().month() + 1, 0).getDate()

  let days = [...Array(date).keys()].map((d, i) => (
    <option value={d + 1} key={i}>
      {d + 1}
    </option>
  ))

  let base = moment().year() - 14

  return (
    <form>
      <p>
        <input type="text" name="name" placeholder="Name" />
      </p>
      <p>
        <select name="mm" defaultValue="month" onChange={selectMonth}>
          <option value="month" disabled hidden>
            Month
          </option>
          {optionsList(12)}
        </select>
        <select name="dd" defaultValue="day" onChange={selectDay}>
          <option value="day" disabled hidden>
            Day
          </option>
          {optionsList(date)}
        </select>
        <select name="yy" defaultValue="year" onChange={selectYear}>
          <option value="year" disabled hidden>
            Year
          </option>
          {optionsList(15, base)}
        </select>
      </p>
    </form>
  )
}

const selectYear = e => {
  console.log(e.target.value)
}

const selectMonth = e => {
  console.log(e.target.value)
}

const selectDay = e => {
  console.log(e.target.value)
}

const optionsList = (range, base = 1) =>
  [...Array(range).keys()].map(d => (
    <option value={d + base} key={d}>
      {d + base}
    </option>
  ))

const CanineForm = connect()(Canine)

export default CanineForm
