import {
  LOAD_ALL_DOGS,
  CREATE_CANINE,
  REMOVE_CANINE
} from '../constants/canines'

const DEFAULT_STATE = {
  canines: []
}

export default function canineReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOAD_ALL_DOGS:
      return {
        ...state,
        canines: action.payload
      }
    case CREATE_CANINE:
      return {
        ...state,
        canines: [...state.canines, action.payload]
      }
    case REMOVE_CANINE:
      return {
        ...state,
        canines: state.canines.filter(canine => {
          return canine.id !== action.payload
        })
      }
    default:
      return state
  }
}
