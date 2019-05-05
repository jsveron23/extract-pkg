function getName (from) {
  const tmpArr = from.slice(0).split('/')
  const dirname = tmpArr.slice(0, -1).join('/')
  const [filename] = tmpArr.reverse()

  return { dirname, filename }
}

module.exports = getName
