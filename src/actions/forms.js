import { SELECT_MONTH, SELECT_DAY, SELECT_YEAR } from '../constants/forms'

export const selectMonth = month => ({
  type: SELECT_MONTH,
  payload: month
})

export const selectDay = day => ({
  type: SELECT_DAY,
  payload: day
})

export const selectYear = year => ({
  type: SELECT_YEAR,
  payload: year
})
