const { response } = require('express')
const express = require('express')
const cors = require('cors');
const router = require('./src/routes/routes')

require('dotenv').config()

const app = express()


let corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 // For legacy browser support
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)

const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address()
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port} ou ${protocol}://${ip}:${port}`)
})

// app.get('/', (request, response) => {
//     response.send('Hello world')
// })