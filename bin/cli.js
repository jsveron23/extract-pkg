#!/usr/bin/env node

// TODO:
// - Support Windows OS for Android
// - Create test script
// - Options from json, js

const yargs = require('yargs')
const { log, ios, android } = require('../lib/extract-pkg')
const { version } = require('../package.json')

const isWin = process.platform === 'win32'

// no Windows support
if (isWin) {
  log.warn('No support Windows platform yet.')

  process.exit(1)
}

// prettier-ignore
const argv = yargs
  .usage('Usage: $0 <ios|android> [options]')
  .command('ios', 'extract .app from iOS simulator')
  .command('android', 'extract .apk from Android emulator')
  .demandCommand(1, 'choose a platform, <ios|android>')
  .help('help').alias('help', 'h')
  .version('version', `v${version}`).alias('version', 'V')
  .options({
    id: {
      alias: 'i',
      description: 'bundle, application id (e.g com.awesome.www)',
      requiresArg: true,
      required: true
    },
    to: {
      alias: 'd',
      description: 'destination directory',
      requiresArg: true,
      required: true
    },
    rename: {
      alias: 'n',
      description: 'rename file',
      requiresArg: true,
      required: false
    }
  })
  .argv

const { _ } = argv
const [platform] = _

if (platform === 'ios') {
  ios(argv)
}

if (platform === 'android') {
  android(argv)
}
