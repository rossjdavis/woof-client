import {
  LOAD_ALL_DOGS,
  CREATE_CANINE,
  REMOVE_CANINE
} from '../constants/canines'

const DEFAULT_STATE = {
  index: []
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
    default:
      return state
  }
}
