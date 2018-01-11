import ioClient from 'socket.io-client'

import { endpoint, messages } from '../constants/websockets'

const socket = ioClient.connect(endpoint)

const init = store => {
  Object.keys(messages).forEach(type => {
    socket.on(type, payload => {
      console.log(type)
      store.dispatch({ type, payload })
    })
  })
}

const emit = (type, payload) => {
  socket.emit(type, payload)
}

export { init, emit }
