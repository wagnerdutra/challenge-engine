const { connect, disconnect, truncate } = require('../utils/dbHelper')
const { createChalenge, getChallenge } = require('../utils/challenge')

describe('Challenge', () => {
  beforeAll(() => connect())
  afterAll(() => disconnect())

  beforeEach(() => truncate())

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
