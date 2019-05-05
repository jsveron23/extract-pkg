const get = require('../helpers/get')
const command = require('../helpers/command')

module.exports = function android ({ id, to, rename }) {
  const extract = command('Extraction `.apk` from Android emulator')('adb')
  const { stdout } = extract(['shell', 'pm', 'path', id])

  const from = stdout.toString().replace(/package:|\n/g, '')
  const { prefix, dirname, filename, dest } = get({
    from,
    to,
    rename
  })

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
