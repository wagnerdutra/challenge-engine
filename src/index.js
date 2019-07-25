const server = require('./server')

server.listen(process.env.APP_PORT)
console.log(process.env.APP_PORT)
