import { init } from '$/service/app'
import { API_SERVER_PORT } from '$/service/envValues'

const app = init()

app.ready().then(
  () => {
    app.io.on('connection', (socket) => {
      let interval: NodeJS.Timeout | null = null
      console.log('server: connect ', socket.id)
      if (interval) {
        clearInterval(interval)
      }
      interval = setInterval(() => getApiAndEmit(socket), 1000)
      socket.on('disconnect', () => {
        console.log('server: disconnect ', socket.id)
      })
    })
    app.listen(API_SERVER_PORT, '0.0.0.0')
  },
  (err) => {
    console.log('an error happened', err)
  }
)

const getApiAndEmit = (socket: SocketIO.Socket) => {
  const response: string = Math.random().toString()
  socket.emit('FromAPI', response)
}
