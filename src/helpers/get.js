module.exports = function get ({ from, to, rename }) {
  const tmpArr = from.slice(0).split('/')
  const dirname = tmpArr.slice(0, -1).join('/')
  const [filename] = tmpArr.reverse()
  const prefix = rename ? 'Copy & Rename' : 'Copy'

  return {
    prefix,
    dirname,
    filename,
    dest: `${to}/${rename || filename}`
  }
}
