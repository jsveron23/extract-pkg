const log = require('./logger')

function validate (platform, argv) {
  const { id, ios = {}, android = {} } = argv
  const config = platform === 'ios' ? ios : android

  if (!id && !config.id) {
    log.err('Missing `--id or -i` or `id` value from config file')

    process.exit(1)
  }
}

module.exports = validate
