'use strict'

const { IDS } = require('./constants')
const set = require('./utils/set')

function main (argv) {
  const { _ } = argv
  const [platform] = _

  // filtered argv
  const nextArgv = Object.keys(argv).reduce((acc, key) => {
    if (IDS.includes(key)) {
      return {
        ...acc,
        [key]: argv[key]
      }
    }

    return acc
  }, {})

  // set prioritization
  const args = set(IDS, [
    nextArgv,
    argv[platform] || {},
    {
      to: process.cwd()
    }
  ])

  const { extract, getFrom, cp } = require(`./platforms/${platform}`)

  const from = getFrom(extract(args.id))
  const tmpArr = from.slice(0).split('/')
  const dirname = tmpArr.slice(0, -1).join('/')
  const [filename] = tmpArr.reverse()
  const prefix = args.rename ? 'Copy & Rename' : 'Copy'
  const dest = `${args.to}/${args.rename || filename}`

  cp({ ...args, from, dest, prefix, dirname, filename })
}

module.exports = main
