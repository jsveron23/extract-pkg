const expect = require('chai').expect
const set = require('../src/helpers/set')

describe('set priorities of argv', () => {
  const config = {
    id: 'com.config.id',
    to: '/config/to',
    rename: 'app-debug.apk'
  }

  it('ignore config props', () => {
    const id = 'com.arg.id'
    const to = '/arg/to'
    const rename = 'app-debug.app'
    const args = set({ id, to, rename, config })

    expect(args).to.have.property('id', id)
    expect(args).to.have.property('to', to)
    expect(args).to.have.property('rename', rename)
  })

  it('use config props', () => {
    const args = set({ id: null, to: null, rename: null, config })

    expect(args).to.have.property('id', config.id)
    expect(args).to.have.property('to', config.to)
    expect(args).to.have.property('rename', config.rename)
  })

  it('`to` value assigned same as the command path', () => {
    const args = set({ id: null, to: null, config: {} })

    // TODO: help me by submitting PR to test process.cwd() properly
    expect(args).to.have.property('to', process.cwd())
  })
})
