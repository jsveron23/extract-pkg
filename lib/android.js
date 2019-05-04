const command = require('./command')
const getName = require('./getName')

function android ({ id, to, rename }) {
  const extract = command('Extraction `.apk` from Android emulator')('adb')
  const { stdout } = extract(['shell', 'pm', 'path', id])

  const from = stdout.toString().replace(/package:|\n/g, '')
  const { dirname, filename } = getName(from)
  let prefix = 'Copy'

  if (rename) {
    prefix = `${prefix} & Rename`
  }

  const dest = `${to}/${rename || filename}`
  const cp = command(`${prefix} - '${dirname}' to ${to}`)('adb')

  cp(['pull', from, dest])
}

module.exports = android
