const url = require('url')
const control = require('./control')

module.exports = (req, res) => {
  let {pathname} = url.parse(req.url)
  
  if(pathname==='/')
    control.home(req, res)
  else if(pathname==='/students')
    control.students(req, res)
  else 
    control.notFound(req, res)
}