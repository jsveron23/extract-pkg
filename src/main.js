const set = require('./helpers/set')

module.exports = function main (argv) {
  const { _ } = argv
  const [platform] = _
  const args = set(Object.assign({}, argv, { config: argv[platform] }))

  require(`./platforms/${platform}`)(args)
}
