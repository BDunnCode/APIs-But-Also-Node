const express = require('express')
const app = express()
const PORT = 3000
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))
app.listen(PORT, () => console.log('listening at 3000'))

app.post('/api', (request, response) => {
  console.log('I got a request!')
  console.log(request.body)
  const data = request.body
  response.json({
    status: 'success',
    latitude: data.lat, 
    longitude: data.lon
  })
})