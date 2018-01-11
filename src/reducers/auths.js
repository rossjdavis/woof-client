import { SET_SESSION, LOGIN_FAILURE } from '../constants/auths'

const DEFAULT_STATE = {
  // token: JSON.parse(sessionStorage.getItem('token'))
  token: 'token'
}

export const auths = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SESSION:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
