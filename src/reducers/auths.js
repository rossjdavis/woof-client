import { LOGIN_SUCCESS, GET_SESSION, LOGIN_FAILURE } from '../constants/auths'

const DEFAULT_STATE = {
  // token: JSON.parse(sessionStorage.getItem('token'))
  token: null
}

export const auths = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
