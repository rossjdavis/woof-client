import {
  REFRESH,
  CREATE_CANINE,
  REMOVE_CANINE,
  SET_PROFILE_VIEW,
  GET_PROFILE_VIEW
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

export function setActive(canine) {
  return (dispatch, getState) => {
    sessionStorage.setItem('view', JSON.stringify(canine))
    dispatch({ type: SET_PROFILE_VIEW, payload: canine })
  }
}

export function getActive() {
  return (dispatch, getState) => {
    let canine = JSON.parse(sessionStorage.getItem('view'))
    dispatch({ type: GET_PROFILE_VIEW, payload: canine })
  }
}
//
// export function getAge(canine) {
//   return (dispatch, getState) => {
//     let age =
//   }
// }
