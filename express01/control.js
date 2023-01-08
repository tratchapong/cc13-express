const {students} = require('./db')

exports.home = (req, res) => {
  res.statusCode = 200
  res.setHeader('content-type','text/html')
  res.end(`<h1>This is Homepage</h1>`)
}

exports.students = (req, res) => {
  res.statusCode = 200
  res.setHeader('content-type', 'text/html')
  res.write('<ul>')
  let outList = students.map( el => `<li>${el}</li>`)
  res.write(outList.toString().replaceAll(',' , ''))
  res.end('</ul>')
}

exports.notFound = (req, res) => {
  res.statusCode = 200
  res.setHeader('content-type', 'text/html')
  res.end('<h1>Page not found</h1>')  
}