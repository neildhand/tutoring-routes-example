
const express = require('express')
const app = express()
const port = 3000
// import index.js from routes folder
const routes = require('./routes')
const path = require('path')

// set middleware for static (frontend) files
app.use(express.static(path.join(__dirname, 'public')));
// set middleware to parse json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// middleware setting up our routes
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})