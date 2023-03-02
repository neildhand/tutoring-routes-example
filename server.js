
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})