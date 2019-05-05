#!/usr/bin/env node

// TODO:
// - Support Windows OS for Android
// - Create test script

const fs = require('fs')
const yargs = require('yargs')
const { version } = require('../package.json')
const options = require('../lib/options')
const check = require('../lib/check')
const logger = require('../lib/logger')

const isWin = process.platform === 'win32'

// no Windows support
if (isWin) {
  logger.warn('No support Windows platform yet.')

  process.exit(1)
}

// prettier-ignore
const argv = yargs
  .usage('Usage: $0 <ios|android> [options]')
  .help('help', 'show help').alias('help', 'h')
  .version('version', 'show version', `v${version}`).alias('version', 'V')
  .command('ios', 'extract .app from iOS simulator')
  .command('android', 'extract .apk from Android emulator')
  .demandCommand(1, 'choose a platform, <ios|android>')
  .config('config', '.json config file support', (confPath) => {
    return JSON.parse(fs.readFileSync(confPath, 'utf-8'))
  }).alias('config', 'c')
  .options(options)
  .check(check)
  .argv

const { _ } = argv
const [platform] = _

if (platform === 'ios') {
  require('../lib/ios')(argv)
}

if (platform === 'android') {
  require('../lib/android')(argv)
}
