const express = require('express')
const db = require('./db')

const app = express()

let sql = `
Select *
From products
Where name like ?
`

db.runsql(sql,['%Excel%']).then( rows => {
  console.log(rows)
})
