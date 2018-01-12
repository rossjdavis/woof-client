import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  FORM_EMAIL,
  FORM_PWORD
} from '../constants/auths'

export function reqLogin(credentials) {
  return (dispatch, getState, { emit }) => {
    emit(LOGIN_REQUEST, credentials)
  }
}
// export function setSession(token) {
//   return (dispatch, getState) => {
//     sessionStorage.setItem('token', JSON.stringify(token))
//     dispatch({ type: LOGIN_SUCCESS, payload: token })
//   }
// }

// export function loginEmail(email) {
//   return (dispatch, getState) => {
//     dispatch({ type: FORM_EMAIL, payload: email })
//   }
// }
//
// export function loginPword(pword) {
//   return (dispatch, getState) => {
//     dispatch({ type: FORM_PWORD, payload: pword })
//   }
// }
