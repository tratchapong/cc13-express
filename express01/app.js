const http = require('http')
const route = require('./route')

const server = http.createServer(route)

server.listen(8000, ()=>console.log('Server on 8000'))


