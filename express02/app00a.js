const http = require('http')
const todo = [
  "Review HTML",
  "Practice CSS",
  "Learn Javascript",
  "Practice React",
  "Practice Node.js"
]
function route(req, res) {
  if(req.url==='/') {
    res.statusCode = 200
    res.setHeader('content-type','text/html')
    return res.end(`<h1>This is Homepage</h1>`)
  }
  if(req.url==='/todo') {
    res.statusCode = 200
    res.setHeader('content-type','application/json')
    return res.end(JSON.stringify(todo))
  }
  else {
    res.statusCode = 200
    res.setHeader('content-type','application/json')
    return res.end(JSON.stringify({msg : 'path not found'}))
  }
}

const server = http.createServer(route)


server.listen(8000, ()=>
  console.log('Server run on port 8000..'))


