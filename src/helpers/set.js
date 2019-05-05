module.exports = function set ({ id, to, rename, config = {} }) {
  id = id || config.id
  to = to || config.to || process.cwd()
  rename = rename || config.rename

  return { id, to, rename }
}
