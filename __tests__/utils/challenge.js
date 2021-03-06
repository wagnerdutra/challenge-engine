const app = require('../../src/server')
const request = require('supertest')

const initialChallenge = {
  name: 'Doar para caridade',
  description:
    'Nesse desafio é esperado que voce faça doação para alguma caridade que esteja mais próxima de você',
  points: 200
}

const createChalenge = async (challenge = {}) => {
  const response = await request(app)
    .post('/createChallenge')
    .send({ ...initialChallenge, ...challenge })
  return response
}

const token = '123456'

const getChallenge = async () => {
  const response = await request(app)
    .get('/getDayChallenge')
    .set('Authorization', `Bearer ${token}`)
  return response
}

module.exports = { createChalenge, getChallenge }
