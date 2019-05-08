'use strict'

module.exports = {
  id: {
    alias: 'i',
    description: 'bundle, application id (e.g com.awesome.www)',
    requiresArg: true
  },
  to: {
    alias: 'd',
    description: 'destination directory',
    requiresArg: true
  },
  rename: {
    alias: 'n',
    description: 'rename file',
    requiresArg: true
  }
}
