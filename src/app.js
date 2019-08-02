const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hallo Welt')
})

app.listen(3000)

module.exports = app
