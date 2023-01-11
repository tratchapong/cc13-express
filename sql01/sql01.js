const express = require('express')
const mysql = require('mysql2/promise')

const app = express()

const dbInfo = {
  host: 'localhost',
  user: 'root',
  password: 'Codecamp2021',
  database: 'cc13_shop'
}

// mysql.createConnection(dbInfo)
// .then(db => db.query('Select * from products'))
// .then(([rows, field]) => {
//   console.log(rows)
//   console.log(field)
// })

let sql = `select p.name AS p_name, p.price AS p_price, c.name AS c_name
from products p 
join category c on p.cat_id = c.id`

mysql.createConnection(dbInfo)
.then(db => db.query(sql))
.then(([rows, field]) => {
  console.log(rows)
  // console.log(field)
})

