const routes = require('express').Router()

routes.get('/', (_, res) => res.send('hello world'))

module.exports = routes
