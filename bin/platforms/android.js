'use strict'

const command = require('../utils/command')

exports.extract = function extract (id) {
  const extract = command('Extract `.apk` from Android emulator')('adb')

  extract(['shell', 'pm', 'path', id])
}

exports.getFrom = function getFrom ({ stdout }) {
  return stdout.toString().replace(/package:|\n/g, '')
}

exports.cp = function cp ({ from, to, dest, prefix, dirname, filename, rename }) {
  const cp = command(
    [
      `${prefix}:`,
      `From(emulator) - ${dirname}`,
      `To - ${to}`,
      `Filename - ${rename || filename}`
    ].join('\n')
  )('adb')

  cp(['pull', from, dest])
}
