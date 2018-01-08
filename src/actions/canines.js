import {
  CREATE_CANINE,
  REMOVE_CANINE,
  LOAD_ALL_DOGS,
  SET_ACTIVE
} from '../constants/canines'

export function showDogsList(canines) {
  return (dispatch, getState, { emit }) => {
    emit(LOAD_ALL_DOGS)
    dispatch({ type: LOAD_ALL_DOGS, payload: canines })
  }
}

export function createCanine(name, born) {
  return (dispatch, getState, { emit }) => {
    emit(CREATE_CANINE, { name, born })
  }
}

export function removeCanine(id) {
  return (dispatch, getState, { emit }) => {
    emit(REMOVE_CANINE, id)
    dispatch({ type: REMOVE_CANINE, payload: id })
  }
}

export function setActive(canine) {
  return (dispatch, getState) => {
    dispatch({ type: SET_ACTIVE, payload: canine })
  }
}
