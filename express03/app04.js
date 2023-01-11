// Error Handling example

const fs = require('fs/promises')
const express = require('express')
const app = express()

function getList() {
  return fs.readFile("./db/data.json").then(JSON.parse);
}

app.get('/', (req, res) => {
  res.send({msg: 'Please use path /todo'})
})

app.get('/todo', (req, res, next) => {
  getList().then( todo=> {
    res.status(200).json(todo)
  }).catch( err => next(err))
})

app.get('/todo/:idx', (req,res, next)=>{
  let  {idx} = req.params
  console.log(+idx)
  getList().then( todo=> {
    if(+idx > todo.length-1) {
      let err = new Error(`Please input less than ${todo.length-1}`)
      err.statusCode = 400
      throw err
    }
    return res.status(200).json(todo[idx-1])
  }).catch(next)
})


app.use((req, res)=> {
  res.status(404).send({msg : 'endpoint not found'})
})

app.use((err,req,res,next) => {
  console.log(err)
  res.status(err.statusCode || 500).json({err : err.message})
})

app.listen(8000, ()=> console.log('Server run on 8000...'))