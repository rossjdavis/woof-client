import SocketIoClient from 'socket.io-client'

import { endpoint, messages } from '../constants/websockets'

const socket = SocketIoClient.connect(endpoint)

const init = store => {
  console.log('ws1')
  Object.keys(messages).forEach(type => {
    socket.on(type, payload => {
      console.log('ws2')

      store.dispatch({ type, payload })
    })
  })
}

const emit = (type, payload) => {
  socket.emit(type, payload)
}

export { init, emit }
