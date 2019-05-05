const { spawnSync } = require('child_process')
const logger = require('./logger')

function command (message) {
  logger.info('>>> ', message)

  return (cmd) => (args, options = {}) => {
    options.encoding = options.encoding || 'utf8'

    const ss = spawnSync(cmd, args, options)
    const { stderr } = ss

    if (stderr) {
      logger.err(options.encoding === 'utf8' ? stderr : stderr.toString())

      process.exit(1)
    }

    return ss
  }
}

module.exports = command
