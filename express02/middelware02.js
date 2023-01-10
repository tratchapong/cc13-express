const express = require('express')

const app = express()

function logHeader1(req, res, next) {
  console.log('LogHeader 1')
  console.log(req.headers)
  next()
}

function logHeader2() {
  return function(req, res, next) {
    console.log('LogHeader 2')
    console.log(req.headers)
    next()
  }
}

app.use(logHeader1)
app.use(logHeader2())

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to Codecamp13</h1>')
  // next()
})

app.get('/students', (req, res) => {
  res.send(['One', 'Two', 'Three', 'Four'])
})

app.use((req, res)=> {
  res.status(404).send({msg :"Path not found..."})
})

app.listen(8000, ()=>console.log('Server on 8000'))


