const routes = require('express').Router()
const validator = require('express-validation')
const handler = require('express-async-handler')

const ChallengeController = require('./app/controllers/ChallengeController')

const ChallengeValidation = require('../src/app/validators/Challenge')

const authMiddleware = require('../src/app/middlewares/authMiddleware')

routes.post(
  '/',
  validator(ChallengeValidation),
  handler(ChallengeController.create)
)

routes.get('/', handler(authMiddleware), handler(ChallengeController.find))

module.exports = routes
