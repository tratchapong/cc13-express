const express = require('express')
const app = express()
const todoRoute = require('./routes/todoRoute')

app.use('/todo', todoRoute)


app.use((req, res)=> {
  res.status(404).send({msg : 'endpoint not found'})
})

app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.statusCode || 500).json({err : err.message})
})

app.listen(8000, ()=> console.log('Server run on 8000..'))