const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('Middleware no.1')
  res.send('<h1>Welcome to Codecamp13</h1>')
  next()
})

app.get('/', (req, res) => {
  console.log('Middleware no.2')
  // res.send('<h1>Welcome to Codecamp14</h1>')
})

app.use((req, res)=> {
  res.status(404).send({msg :"Path not found..."})
})

app.listen(8000, ()=>console.log('Server on 8000'))


