import { REFRESH, REMOVE_CANINE, CREATE_CANINE } from './canines'
import { LOGIN_REQUEST, SET_SESSION } from './auths'

const endpoint = 'http://localhost:3001'
const messages = [
  REFRESH,
  REMOVE_CANINE,
  CREATE_CANINE,
  LOGIN_REQUEST,
  SET_SESSION
].reduce((d, i) => {
  d[i] = i
  return d
}, {})

export { endpoint, messages }
