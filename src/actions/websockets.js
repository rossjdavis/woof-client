import SocketIoClient from 'socket.io-client'
import { endpoint, messages } from '../constants/websockets'

const socket = SocketIoClient(endpoint)

const init = store => {
  return function action(dispatch) {
    Object.keys(messages).forEach(type =>
      socket.on(type, payload => {
        store.dispatch(type, payload)
        console.log(type)
      })
    )
  }
}

const emit = (type, payload) => {
  socket.emit(type, payload)
}

export { init, emit }
