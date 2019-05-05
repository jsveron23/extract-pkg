const command = require('./command')
const getName = require('./getName')

function android ({ id, to, rename, android = {} }) {
  id = id || android.id
  to = to || android.to || process.cwd()
  rename = rename || android.rename

  const extract = command('Extraction `.apk` from Android emulator')('adb')
  const { stdout } = extract(['shell', 'pm', 'path', id])

  const from = stdout.toString().replace(/package:|\n/g, '')
  const { dirname, filename } = getName(from)

  let prefix = 'Copy'

  if (rename) {
    prefix = `${prefix} & Rename`
  }

  const dest = `${to}/${rename || filename}`
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

module.exports = android
