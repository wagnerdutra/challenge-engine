const DbHelper = require('../utils/dbHelper')
const { createChalenge, getChallenge } = require('../utils/challenge')

const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

const {
  baseUrl,
  port,
  authenticationRoutePath
} = require('../../src/config/userEngine')

mock
  .onGet(`${baseUrl}:${port}/${authenticationRoutePath}`)
  .reply(200, { ok: true })

describe('Challenge', () => {
  beforeAll(() => DbHelper.connect())

  afterAll(() => DbHelper.disconnect())

  beforeEach(() => DbHelper.truncate())

  it('should insert the challenge and return ok', async () => {
    const response = await createChalenge()
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ ok: true })
  })

  it('should validate missing fields', async () => {
    const response = await createChalenge({ name: '', description: '' })
    expect(response.status).toBe(400)
    expect(response.body.errors.length).toBe(2)
  })

  it('should not insert more than one challenge in the same date', async () => {
    await createChalenge()
    const response = await createChalenge()
    expect(response.status).toBe(400)
    expect(response.body).toEqual({
      error: 'Desafio do dia já exite'
    })
  })

  it('should not return any challenge', async () => {
    const response = await getChallenge()
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Desafio do dia não foi criado' })
  })

  it('shoud return the day challenge', async () => {
    await createChalenge()
    const response = await getChallenge()
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('challenge')
  })
})
