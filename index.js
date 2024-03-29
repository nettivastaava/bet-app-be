require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const { results } = require('./utils')
const Player = require('./models/player')
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)


mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB') 
  })  
  .catch((error) => {    
    console.log('error connecting to MongoDB:', 
    error.message)  
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

const calculateScore = (guess, actual, player, index) => {
  if (guess.h === actual.h && guess.a === actual.a) {
    if (player.first_three > index) {
      player.first_three = index
    }
    player.threes += 1
    return 3
  } else if (guess.h > guess.a && actual.h > actual.a) {
    if (guess.h === actual.h || guess.a === actual.a) {
      if (player.first_two > index) {
        player.first_two = index
      }
      player.twos += 1
      return 2
    }
    player.ones +=1
    return 1
  } else if (guess.h < guess.a && actual.h < actual.a) {
    if (guess.h === actual.h || guess.a === actual.a) {
      if (player.first_two > index) {
        player.first_two = index
      }
      player.twos += 1
      return 2
    }
    player.ones +=1
    return 1
  } else if (guess.h === actual.h || guess.a === actual.a || (guess.h === guess.a && actual.h === actual.a)) {
    player.ones +=1
    return 1
  }

  return 0
}

const updatePlayerScores = player => {
  const playerPoints = [...player.points_list]
  let updated = false
  results.forEach((r, index) => {
    if (!playerPoints[index]) {
      updated = true
      playerPoints[index] = calculateScore(player.guesses[index], r, player, index)
    }
  })
  if (updated) {
    player.points_list = playerPoints

    try {
      player.save()
    } catch (error) {
      console.log('something went wrong')
    }
  }
  return player
}

// console.log(results)
// console.log(players)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/players', (req, res) => {
  Player.find({}).then(players => {
    res.json(players.map(p => updatePlayerScores(p)))
  })
})
/*
app.get('/api/players/update', async (req, res) => {
  const players = await Player.find({})

  players.forEach(p => (
    updatePlayerScores(p)
  ))

  return players
})
*/
app.get('/api/results', (req, res) => {
  res.json(results)
})

app.post('/api/players', (request, response, next) => {
  const body = request.body
  console.log("body ", body)
  const newPlayer = new Player({
    name: body.name,
    guesses: body.guesses
  })

  newPlayer.save().then(result => {
    console.log('new player saved!')
  }).catch(error => next(error))
})

app.delete('/api/players/:id', (request, response, next) => {
  Player.findByIdAndRemove(request.params.id)
    .then(result => {
      console.log('player deleted')
      response.status(204).end()
    })
    .catch(error => next(error))
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})