'use strict'

const command = require('../utils/command')

exports.extract = function extract (id) {
  const extract = command('Extract `.app` from iOS simulator')('xcrun')

  return extract(['simctl', 'get_app_container', 'booted', id])
}

exports.getFrom = function getFrom ({ stdout }) {
  return stdout.split('\n').join('')
}

exports.cp = function cp ({ from, to, dest, prefix, dirname, filename, rename }) {
  const cp = command(
    [
      `${prefix}:`,
      `From - ${dirname}`,
      `To - ${to}`,
      `Filename - ${rename || filename}`
    ].join('\n')
  )('cp')

  cp(['-r', from, dest])
}
