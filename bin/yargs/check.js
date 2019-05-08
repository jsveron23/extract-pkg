'use strict'

function check (argv) {
  const { _, id, ios = {}, android = {} } = argv
  const [platform] = _
  const config = platform === 'ios' ? ios : android

  if (!id && !config.id) {
    throw new Error('Missing `--id` or `-i`')
  }

  return true
}

module.exports = check
