const mongoose = require('mongoose')
const moment = require('moment')

const ChallengeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  points: {
    type: Number,
    require: true
  },
  created_at: {
    type: Date,
    default: moment().format('YYYY-MM-DD')
  }
})

module.exports = mongoose.model('Challenge', ChallengeSchema)
