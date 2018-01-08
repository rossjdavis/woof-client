import moment from 'moment'

import { SELECT_YEAR, SELECT_MONTH, SELECT_DAY } from '../constants/forms'

const DEFAULT_STATE = {
  date: {
    month: moment().month() + 1,
    day: moment().date(),
    year: moment().year()
  }
}

export default function formReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SELECT_MONTH:
      return {
        ...state,
        date: {
          month: action.payload
        }
      }
    case SELECT_DAY:
      return {
        ...state,
        date: { day: action.payload }
      }
    case SELECT_YEAR:
      return {
        ...state,
        date: { year: action.payload }
      }

    default:
      return state
  }
}
