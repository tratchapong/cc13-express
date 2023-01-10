const fs = require('fs/promises')
const express = require('express')
const app = express()

function getList() {
  return fs.readFile("./db/data.json").then(JSON.parse);
}

function addList(title) {
  return getList().then((list) => {
      list.push(title);
      fs.writeFile("./db/data.json", JSON.stringify(list, null, 2));
      return list;
    })
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send({msg: 'Please use path /todo'})
})

app.get('/todo', (req, res) => {
  getList().then( todo=> {
    res.status(200).json(todo)
  })
})

app.get('/todo/search', (req, res)=> {
  // console.log(req.query)
  let {title} = req.query
  if(!title)
    return res.status(400).json({msg: 'Please input query like ?title=xxxx'})
  getList().then(todo=>{
    return todo.find(el => el.includes(title))
  }).then( rs => {
    console.log(rs)
    if(!rs)
      return res.status(404).json({msg: 'not Found!!'})
    res.status(200).json(rs)
  })
})

app.get('/todo/:idx', (req,res)=>{
  let  {idx} = req.params
  console.log(req.params)
  getList().then( todo=> {
    res.status(200).json(todo[idx-1])
  })
})

app.post('/todo', (req, res)=>{
  let {title} = req.body
  // console.log(req.body)
  if(!title)
    return res.status(400).json({msg: 'Please input a new title..'})
  addList(title).then(list => {
    res.status(200).json(list)
  })
})

app.use((req, res)=> {
  res.status(404).send({msg : 'path not found'})
  // res.sendStatus(404)
})


app.listen(8000, ()=> console.log('Server run on 8000...'))