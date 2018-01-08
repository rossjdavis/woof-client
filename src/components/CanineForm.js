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

  let mm = [...Array(12).keys()].map((d, i) => (
    <option value={d + 1} key={i}>
      {d + 1}
    </option>
  ))

  let yy = [...Array(15).keys()].map((d, i) => (
    <option value={d + base} key={i}>
      {d + base}
    </option>
  ))
  console.log(base)
  console.log(yy)

  console.log(mm)

  console.log(days)

  return (
    <form>
      <p>
        <input type="text" name="name" placeholder="Name" />
      </p>
      <p>
        <select name="mm">{mm}</select>
        <select name="dd">{days}</select>
        <select name="yy">{yy}</select>
      </p>
    </form>
  )
}

const CanineForm = connect()(Canine)

export default CanineForm
