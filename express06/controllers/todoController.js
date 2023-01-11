const db = require('../models/db')

exports.getAllTodo = (req, res, next) => {
  db.getList().then( todo=> {
    res.status(200).json(todo)
  }).catch( err => next(err))
}

exports.getTodo = (req,res, next)=>{
  let  {idx} = req.params
  console.log(+idx)
  db.getList().then( todo=> {
    if(+idx > todo.length-1) {
      let err = new Error(`Please input less than ${todo.length-1}`)
      err.statusCode = 400
      throw err
    }
    return res.status(200).json(todo[idx-1])
  }).catch(next)
}