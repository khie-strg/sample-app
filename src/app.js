const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hey world')
})

app.listen(3000)

module.exports = app
