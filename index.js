const express = require('express')
const app = express()
const PORT = 3000
const Datastore = require('nedb')
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))
app.listen(PORT, () => console.log('listening at 3000'))


const database = new Datastore('database.db')
database.loadDatabase()

app.post('/api', (request, response) => {
  const data = request.body
  const timestamp = Date.now()
  data.timestamp = timestamp
  database.insert(data)
  response.json(data)
})
