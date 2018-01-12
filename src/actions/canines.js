import {
  REFRESH,
  CREATE_CANINE,
  REMOVE_CANINE,
  TOGGLE_PROFILE_VIEW
} from '../constants/canines'

export function getDogs(canines) {
  return (dispatch, getState, { emit }) => {
    emit(REFRESH)
    dispatch({ type: REFRESH, payload: canines })
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

export function showView(canine) {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_PROFILE_VIEW, payload: canine })
  }
}

export function exitView() {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_PROFILE_VIEW, payload: null })
  }
}
