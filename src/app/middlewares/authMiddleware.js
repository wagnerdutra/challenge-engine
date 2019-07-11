const { userEngineHttpRequest } = require('../services/axios')

const { authenticationRoutePath } = require('../../config/userEngine')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  const Authorization = `Bearer ${token}`

  userEngineHttpRequest
    .get(`/${authenticationRoutePath}`, {
      headers: { Authorization }
    })
    .then(() => next())
    .catch(({ response: { status, data } }) => res.status(status).json(data))
}
