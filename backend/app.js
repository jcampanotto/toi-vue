const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-06.cleardb.net",
  user: "b32efa927124b6",
  password: "10bc3141",
  port: "3306",
  database: "heroku_787ca92e51fcfe9"
})

//Cors Configuration - Start
const corsOptions = {
  origin: '*',
  methods: "GET, PUT, POST, DELETE"
}
app.use(cors(corsOptions))
//Cors Configuration - End

// API Routes
// Main View | / | GET | Displays all products
app.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
    connection.query("SELECT * FROM products", function(err, result, field) {
      connection.release()
      res.send(result) // sends an array of products from db
    })
  })
})

// Single Product View | /:id | GET | Displays a specific product
app.get('/:id', (req, res) => {
  pool.getConnection((err, connection) => {
    let sql = `SELECT * FROM products where ProductId = ${req.params.id}`
    connection.query(sql, (err, result) => {
      if (result === undefined) {
        res.status(404).send("Sorry something went wrong")
      } else if (result.length === 0) {
        res.status(404).send(`Sorry cannot find product id: ${req.params.id}`)
      } else {
        res.send(result)
      }
    })
    connection.release()
  })
})

// // Like | /:id | POST | Increments the likes for product id
app.post('/:id', (req, res) => {
  pool.getConnection((err, connection) => {
    // If success this redirects to GET :/id so it sends the updated db entry
    let sql = `SELECT * FROM products where ProductId = ${req.params.id}`
    connection.query(sql, (err, result) => {
      if (result.length === 0) {
        res.status(404).send(`Sorry cannot find product id: ${req.params.id}`)
      } else {
        connection.release()
        pool.getConnection((err, connection) => {
          let likes = result[0].Likes
          let update = `UPDATE products SET Likes = ${likes+1} WHERE ProductId = ${req.params.id}`
          connection.query(update, (err, result) => {
            res.redirect(`/${req.params.id}`)
            connection.release()
          })
        })
      }
    })
  })
})

// // Unlike | /products/:id | DELETE | Decrements the likes
app.delete('/:id', (req, res) => {
  pool.getConnection((err, connection) => {
    // If success this redirects to GET :/id so it sends the updated db entry
    let sql = `SELECT * FROM products where ProductId = ${req.params.id}`
    connection.query(sql, (err, result) => {
      if (result.length === 0) {
        res.status(404).send(`Sorry cannot find product id: ${req.params.id}`)
      } else {
        let likes = result[0].Likes
        let update = `UPDATE Products SET Likes = ${likes-1} WHERE ProductId = ${req.params.id}`
        connection.query(update, (err, result) => {
          res.redirect(`/${req.params.id}`)
        })
      }
    })
  })
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})


app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

