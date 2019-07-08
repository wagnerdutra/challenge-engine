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
    .post('/')
    .send({ ...initialChallenge, ...challenge })
  return response
}

const getChallenge = async () => {
  const response = await request(app).get('/')
  return response
}

module.exports = { createChalenge, getChallenge }
