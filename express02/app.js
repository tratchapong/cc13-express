const express = require('express')
const app = express()

const todo = [
  "Review HTML",
  "Practice CSS",
  "Learn Javascript",
  "Practice React",
  "Practice Node.js"
]

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('<h1>This is Homepage</h1>')
})

app.get('/todo', (req, res) => {
  res.send(todo)
})

app.post('/todo', (req, res) => {
  res.send('This is a post Method')
})

app.use((req, res)=> {
  res.status(404).send({msg : 'path not found'})
})

app.listen(8000, ()=>console.log('Server run on port 8000..'))
