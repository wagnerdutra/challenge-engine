const axios = require('axios')
const {
  baseUrl,
  port,
  authenticationRoutePath
} = require('../../config/userChallenge')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  const Authorization = `Bearer ${token}`

  axios
    .get(`${baseUrl}:${port}/${authenticationRoutePath}`, {
      headers: { Authorization }
    })
    .then(() => next())
    .catch(({ response: { status, data } }) => res.status(status).json(data))
}
