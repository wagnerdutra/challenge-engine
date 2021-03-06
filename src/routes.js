const routes = require('express').Router()
const validator = require('express-validation')
const handler = require('express-async-handler')

const ChallengeController = require('./app/controllers/ChallengeController')

const MetricsController = require('./app/controllers/MetricsController')

const ChallengeValidation = require('../src/app/validators/Challenge')

const authMiddleware = require('../src/app/middlewares/authMiddleware')

routes.post(
  '/createChallenge',
  validator(ChallengeValidation),
  handler(ChallengeController.create)
)

routes.get(
  '/getDayChallenge',
  handler(authMiddleware),
  handler(ChallengeController.find)
)

routes.get('/health', handler(MetricsController.health))

routes.get('/ready', MetricsController.ready)

module.exports = routes
