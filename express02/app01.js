// start morph from http-code in Node.js pattern

const http = require('http')

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Codecamp</h1>')
})

app.get('/students', (req, res) => {
  res.send(['One', 'Two', 'Three', 'Four'])
})

app.use((req, res)=> {
  res.status(404).send({msg :"Path not found..."})
})
const server = http.createServer(app)

server.listen(8000, ()=>console.log('Server on 8000'))
