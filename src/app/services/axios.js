const axios = require('axios')
const { baseUrl, port } = require('../../config/userEngine')

const userEngineUrl = `${baseUrl}:${port}`

const userEngineHttpRequest = {
  get: path => axios.get(`${userEngineUrl}${path}`),
  post: (path, params) => axios.post(`${userEngineUrl}${path}`, { ...params })
}

module.exports = { userEngineHttpRequest }
