require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const { results, players } = require('./utils')
const Player = require('./models/player')
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)

console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {    
    console.log('connected to MongoDB') 
  })  
  .catch((error) => {    
    console.log('error connecting to MongoDB:', 
    error.message)  
  })

app.use(cors())

app.use(express.json())

// console.log(results)
// console.log(players)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/players', (req, res) => {
  res.json(players)
})

app.get('/api/results', (req, res) => {
  res.json(results)
})

app.post('/api/players', (request, response) => {
  const body = request.body
  console.log("body ", body)
  const newPlayer = new Player({
    name: body.name,
    guesses: body.guesses
  })

  newPlayer.save().then(result => {
    console.log('new player saved!')
    mongoose.connection.close()
  })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})