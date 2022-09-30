const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
const {Server} = require("socket.io")


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:"http://localhost:3000",
        methods:["GET", "POST"]

    }
})

io.on("connection", (socket)=>{
    console.log(`User Connected: ${socket.id}`)

    socket.on("send message", (data)=>{
        socket.broadcast.emit("recieve message", data)
    })
})

server.listen(3001, () => {
    console.log(`Server Started On Port: 3001`)
})


