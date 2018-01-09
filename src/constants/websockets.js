import { REFRESH, REMOVE_CANINE, CREATE_CANINE } from './canines'

const endpoint = 'http://localhost:3001'
const messages = [REFRESH, REMOVE_CANINE, CREATE_CANINE].reduce((d, i) => {
  d[i] = i
  return d
}, {})

export { endpoint, messages }
