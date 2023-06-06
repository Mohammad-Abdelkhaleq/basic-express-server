require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const notFound = require('./error-handlers/404.js')
const serverError = require('./error-handlers/500.js')
const validator = require('./middleware/validator.js')
const logger = require('./middleware/logger.js')

// app.use(validator)
app.use(logger)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/person', validator,(req, res) => {
  const name = req.query.name
  res.send({
    name: name
  })
})

app.use ('*', notFound)
app.use (serverError)
function start() {
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})}
module.exports = {
    start:start,
    app:app
}