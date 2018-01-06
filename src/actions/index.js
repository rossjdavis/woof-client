import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

export const bringToState = () => {
  return (dispatch, getState, { emit }) => {
    emit(LOAD_ALL_DOGS)
  }
}
