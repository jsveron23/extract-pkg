#!/usr/bin/env node

// TODO:
// - Support Windows OS for Android

const yargs = require('yargs')
const { check, options } = require('./yargs')
const logger = require('./helpers/logger')
const { version } = require('../package.json')

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
  .config('config', '.js or JSON support', (c) => require(c)).alias('config', 'c')
  .options(options)
  .check(check)
  .argv

require('./main')(argv)
