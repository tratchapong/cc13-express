const express = require('express')
const todoRoute = require('./routes/todoRoute')

const app = express()

app.use(express.json())
app.use('/todo', todoRoute)

app.use( (req,res,next) => {
  res.status(404).json({msg : 'no service'})
})

app.use( (err,req,res,next) => {
  console.log(err)
  res.status(500).json({err : err.message})
})

app.listen(8000, ()=> console.log('Server Run on 8000'))
