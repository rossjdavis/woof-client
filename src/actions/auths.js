import { LOGIN_REQUEST, SET_SESSION, LOGIN_FAILURE } from '../constants/auths'

export function reqLogin(name) {
  return (dispatch, getState, { emit }) => {
    emit(LOGIN_REQUEST, { name })
  }
}

export function setSession(token) {
  return (dispatch, getState) => {
    sessionStorage.setItem('token', token)
    dispatch(SET_SESSION, { token })
  }
}
