const Challenge = require('../models/Challenge')
const moment = require('moment')

class ChallengeController {
  async create(req, res) {
    if (
      await Challenge.findOne({
        created_at: moment().format('YYYY-MM-DD')
      })
    ) {
      return res.status(400).json({ error: 'Desafio do dia já exite' })
    }
    await Challenge.create(req.body)
    return res.json({ ok: true })
  }

  async find(_, res) {
    const challenge = await Challenge.findOne({
      created_at: moment().format('YYYY-MM-DD')
    })

    if (challenge) {
      return res.json({ challenge })
    }

    return res.json({ message: 'Desafio do dia não foi criado' })
  }
}

module.exports = new ChallengeController()
