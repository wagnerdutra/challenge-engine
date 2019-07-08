const joi = require('joi')

module.exports = {
  body: {
    name: joi.string().required(),
    description: joi.string().required(),
    points: joi.number().required()
  }
}
