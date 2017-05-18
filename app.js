var express = require('express')
var app = express()

app.use(express.static('dist'))
app.get('*', function (req, res) {
  res.sendFile(__dirname+'/index.html')
})

module.exports = app;