const command = require('./command')
const getName = require('./getName')

function ios ({ id, to, rename }) {
  const extract = command('Extraction `.app` from iOS simulator')('xcrun')
  const { stdout } = extract(['simctl', 'get_app_container', 'booted', id])

  const from = stdout.split('\n').join('')
  const { dirname, filename } = getName(from)
  let prefix = 'Copy'

  if (rename) {
    prefix = `${prefix} & Rename`
  }

  const dest = `${to}/${rename || filename}`
  const cp = command(`${prefix} - '${dirname}' to ${to}`)('cp')

  cp(['-r', from, dest])
}

module.exports = ios
