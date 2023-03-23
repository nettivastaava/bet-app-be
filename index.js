require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const { results, players } = require('./utils')

const url = process.env.MONGODB_URI

app.use(cors())

app.use(express.json())

console.log(results)
console.log(players)


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/players', (req, res) => {
  res.json(players)
})

app.get('/api/results', (req, res) => {
  res.json(results)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})