const routes = require('express').Router()
const validator = require('express-validation')
const handler = require('express-async-handler')

const ChallengeController = require('./app/controllers/ChallengeController')

const ChallengeValidation = require('../src/app/validators/Challenge')

routes.post(
  '/',
  validator(ChallengeValidation),
  handler(ChallengeController.create)
)

routes.get('/', handler(ChallengeController.find))

module.exports = routes
