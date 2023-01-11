const db = require('../models')

exports.getAllTodo = (req, res, next) => {
  db.getList().then( todo=> {
    res.status(200).json(todo)
  }).catch( err => next(err))
}

exports.getTodo = (req, res, next) => {
  let  {idx} = req.params
  db.getList().then( todo=> {
    if(+idx > todo.length-1) {
      let err = new Error(`Please input less than ${todo.length-1}`)
      err.statusCode = 400
      throw err
    }
    return res.status(200).json(todo[idx])
  }).catch(next)
}

exports.searchTodo = ( req, res, next) => {
  let {title} = req.query
  console.log(title)
  if(!title)
    return res.status(400).json({msg: 'Please input query like ?title=xxxx'})
  db.getList().then(todo=>{
    return todo.filter(el => el.includes(title))
  }).then( rs => {
    if(!rs)
      return res.status(404).json({msg: 'not Found!!'})
    res.status(200).json(rs)
  }) 
}

exports.createTodo = (req, res, next) => {
  let {title} = req.body
  if(!title)
    return res.status(400).json({msg: 'Please input a new title..'})
  db.addList(title).then(list => {
    res.status(200).json(list)
  })
}

exports.editTodo = (req, res, next) => {
  let {idx} = req.params
  let {title} = req.body
  db.editList(idx, title).then(list => {
    res.status(200).json(list)
  })

}

exports.deleteTodo = (req, res, next) => {
  let {idx} = req.params
  db.deleteList(idx).then(list => {
    res.status(200).json(list)
  })
}