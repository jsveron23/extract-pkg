'use strict'

function set (ids, args) {
  return args.reduce((acc, arg) => {
    const o = ids.reduce((nextArg, id) => {
      if (!acc[id] && arg[id]) {
        return {
          ...nextArg,
          [id]: arg[id]
        }
      }

      return nextArg
    }, {})

    return {
      ...o,
      ...acc
    }
  }, {})
}

module.exports = set
