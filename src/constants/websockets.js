import { REFRESH, REMOVE_CANINE, CREATE_CANINE } from './canines'
import { LOGIN_REQUEST, LOGIN_SUCCESS } from './auths'

const endpoint = 'http://localhost:3001'
const messages = [
  REFRESH,
  REMOVE_CANINE,
  CREATE_CANINE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
].reduce((d, i) => {
  d[i] = i
  return d
}, {})

export { endpoint, messages }
