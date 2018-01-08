import moment from 'moment'

import { SELECT_YEAR, SELECT_MONTH, SELECT_DAY } from '../constants/forms'

const DEFAULT_STATE = {
  month: moment().month() + 1,
  day: moment().date(),
  year: moment().year()
}

export const forms = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_MONTH:
      return {
        ...state,
        month: action.payload
      }

    case SELECT_DAY:
      return {
        ...state,
        day: action.payload
      }

    case SELECT_YEAR:
      return {
        ...state,
        year: action.payload
      }

    default:
      return state
  }
}
