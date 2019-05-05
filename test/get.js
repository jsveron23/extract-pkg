const expect = require('chai').expect
const get = require('../src/helpers/get')

describe('get values to use inside scope', () => {
  it('should return renamed destination', () => {
    const args = {
      from: '/actual/data/im-the-one.apk',
      to: '/path/to',
      rename: 'app-debug.apk'
    }
    const values = get(args)

    expect(values).to.have.property('prefix', 'Copy & Rename')
    expect(values).to.have.property('dirname', '/actual/data')
    expect(values).to.have.property('filename', 'im-the-one.apk')
    expect(values).to.have.property('dest', `${args.to}/${args.rename}`)
  })

  it('should return original destination', () => {
    const args = {
      from: '/actual/data/im-the-one.apk',
      to: '/path/to'
    }
    const values = get(args)

    expect(values).to.have.property('prefix', 'Copy')
    expect(values).to.have.property('dirname', '/actual/data')
    expect(values).to.have.property('filename', 'im-the-one.apk')
    expect(values).to.have.property('dest', `${args.to}/im-the-one.apk`)
  })
})
