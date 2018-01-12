import { LOGIN_SUCCESS } from '../constants/auths'

const DEFAULT_STATE = {
  token: JSON.parse(sessionStorage.getItem('token'))
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
