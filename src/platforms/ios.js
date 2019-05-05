const get = require('../helpers/get')
const command = require('../helpers/command')

module.exports = function ios ({ id, to, rename }) {
  const extract = command('Extraction `.app` from iOS simulator')('xcrun')
  const { stdout } = extract(['simctl', 'get_app_container', 'booted', id])

  const from = stdout.split('\n').join('')
  const { prefix, dirname, filename, dest } = get({
    from,
    to,
    rename
  })

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
