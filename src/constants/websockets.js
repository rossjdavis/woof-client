import { LOAD_ALL_DOGS } from './canines'

const endpoint = 'http://localhost:3001'
const messages = [LOAD_ALL_DOGS].reduce((d, i) => {
  d[i] = i
  return d
}, {})

export { endpoint, messages }
