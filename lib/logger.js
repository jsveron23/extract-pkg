const colors = require('colors') // eslint-disable-line

function info (prefix = '', message) {
  console.log(prefix.green, message)
}

function warn (message) {
  console.log(message.grey)
}

function err (message) {
  console.log('Error(s): '.red)
  console.log(message)
}

module.exports = {
  info,
  warn,
  err
}
