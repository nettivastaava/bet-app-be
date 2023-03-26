const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ones: {
        type: Number,
        default: 0
    },
    twos: {
        type: Number,
        default: 0
    },
    threes: {
        type: Number,
        default: 0
    },
    first_one: {
        type: Number,
        default: 99
    },
    first_two: {
        type: Number,
        default: 99
    },
    first_three: {
        type: Number,
        default: 99
    },
    points_list: {
        type: Array,
        default: Array(48).fill(undefined)
    },
    guesses: [{
        match: {
            type: String,
            required: true
        },
        h: {
            type: Number,
            required: true,
            min: 0
        },
        a: {
            type: Number,
            required: true,
            min: 0
        },
    }]

})

playerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

module.exports = mongoose.model('Player', playerSchema)