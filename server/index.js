const express = require("express")
const app = express()

const morgan = require("morgan")
app.use(morgan("dev"))

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Once your browser gets your index.html, it often needs to request static assets
//from your server - these include javascript files, css files, and images.
const path = require('path')
app.use(express.static(path.join(__dirname, "../public")))

app.use('/api', require('./api'))

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.use(function(err, req, res, next) {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || "INTERNAL SERVER ERROR")
})


const port = process.env.PORT || 3000

app.listen(port, function(){
    console.log(`Server listening on port ${port}`)
})