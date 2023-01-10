const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
  console.log('Middleware no.1')
  res.send('<h1>Welcome to Codecamp13</h1>')
  next()
})

app.use( (req, res, next) => {
  console.log('Middleware no.2')
  next()
})

app.use( (req, res) => {
  console.log('Middleware no.3')
})

app.listen(8000, ()=>console.log('Server on 8000'))



