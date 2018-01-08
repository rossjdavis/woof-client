import moment from 'moment'

import { SELECT_YEAR, SELECT_MONTH, SELECT_DAY } from '../constants/forms'

const DEFAULT_STATE = {
  date: {
    month: moment().month() + 1,
    day: moment().date(),
    year: moment().year()
  }
}

export const forms = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SELECT_MONTH:
      return {
        ...state,
        date: {
          month: action.payload,
          day: state.date.day,
          year: state.date.year
        }
      }

    case SELECT_DAY:
      return {
        ...state,
        date: {
          month: state.date.month,
          day: action.payload,
          year: state.date.year
        }
      }

    case SELECT_YEAR:
      return {
        ...state,
        date: {
          month: state.date.month,
          day: state.date.month,
          year: action.payload
        }
      }

    default:
      return state
  }
}
