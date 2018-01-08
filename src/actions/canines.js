import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

export function showDogsList() {
  return (dispatch, getState, { emit }) => {
    emit(LOAD_ALL_DOGS)
  }
}

export function createCanine(payload) {
  return (dispatch, getState, { emit }) => {
    emit(CREATE_CANINE, { payload })
    dispatch({ type: CREATE_CANINE, canines: payload })
  }
}

export function removeCanine(payload) {
  return (dispatch, getState, { emit }) => {
    emit(REMOVE_CANINE, { payload })
    dispatch({ type: REMOVE_CANINE, canines: payload })
  }
}
