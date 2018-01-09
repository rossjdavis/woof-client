import {
  REFRESH,
  CREATE_CANINE,
  REMOVE_CANINE,
  SET_PROFILE_VIEW,
  GET_PROFILE_VIEW
} from '../constants/canines'

const DEFAULT_STATE = {
  index: [],
  view: null
}
export const canines = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REFRESH:
      return {
        ...state,
        index: action.payload
      }
    case CREATE_CANINE:
      return {
        ...state,
        index: [...state.index, action.payload]
      }
    case REMOVE_CANINE:
      return {
        ...state,
        index: state.index.filter(canine => {
          return canine._id !== action.payload
        })
      }
    case SET_PROFILE_VIEW:
      return {
        ...state,
        view: action.payload
      }
    case GET_PROFILE_VIEW:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state
  }
}
