import {
  LOAD_ALL_DOGS,
  CREATE_CANINE,
  REMOVE_CANINE,
  SET_ACTIVE
} from '../constants/canines'

const DEFAULT_STATE = {
  index: [],
  view: null
}
export const canines = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOAD_ALL_DOGS:
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
    case SET_ACTIVE:
      return {
        ...state,
        view: action.payload
      }
    default:
      return state
  }
}
