import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/auths'

export function reqLogin(name) {
  return (dispatch, getState, { emit }) => {
    console.log(name)
    emit(LOGIN_REQUEST, { name })
  }
}
// export function setSession(token) {
//   return (dispatch, getState) => {
//     sessionStorage.setItem('token', JSON.stringify(token))
//     dispatch({ type: LOGIN_SUCCESS, payload: token })
//   }
// }
