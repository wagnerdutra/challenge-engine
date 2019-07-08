const routes = require('express').Router()
const validator = require('express-validation')

const ChallengeController = require('./app/controllers/ChallengeController')

const ChallengeValidation = require('../src/app/validators/Challenge')

routes.post('/', validator(ChallengeValidation), ChallengeController.create)

routes.get('/', ChallengeController.find)

module.exports = routes
