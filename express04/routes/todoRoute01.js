const fs = require('fs/promises')
const express = require('express')
const router = express.Router()

function getList() {
  return fs.readFile("./db/data.json").then(JSON.parse);
}

router.get('/', (req, res, next) => {
    getList().then( todo=> {
    res.status(200).json(todo)
  }).catch( err => next(err))
})

router.get('/:idx', (req,res, next)=>{
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

module.exports = router