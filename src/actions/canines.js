import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS
} from '../constants/canines'

export function showDogsList(payload) {
  return (dispatch, getState, { emit }) => {
    emit(LOAD_ALL_DOGS)
    dispatch({ type: LOAD_ALL_DOGS, payload: payload })
  }
}

export function createCanine(payload) {
  return (dispatch, getState, { emit }) => {
    emit(CREATE_CANINE, payload)
  }
}

export function removeCanine(payload) {
  return (dispatch, getState, { emit }) => {
    console.log(payload)
    emit(REMOVE_CANINE, payload)
    dispatch({ type: REMOVE_CANINE, payload: payload })
  }
}
