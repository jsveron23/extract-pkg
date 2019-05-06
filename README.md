# extract-pkg &middot; [![npm](https://img.shields.io/npm/v/extract-pkg.svg)](https://www.npmjs.com/package/extract-pkg) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Extract app package from iOS simulator or Android emulator. You must check 2 things before running the command.

- Simulator or emulator should be running
- The package file(.app or .apk) should be already installed

## Installation

```bash
$ npm install extract-pkg -g # or --save-dev
```

## Usage

```bash
$ extract-pkg # or --help, display usage
```

If did not add `--to` or `-d`, the command will use same path where command executed.

```bash
$ extract-pkg ios --id=com.some.pkg
```

If did not add `--rename` or `-n`, the command will be using same as original package file name.

```bash
$ extract-pkg android --id=com.some.pkg --rename=app-debug.apk
```

## Support .js or JSON

```json
{
  "ios": {
    "id": "com.awesome.ios",
    "to": "/path/to"
  },
  "android": {
    "id": "com.awesome.android",
    "to": "/path/to"
  }
}
```

```bash
$ extract-pkg android --config=/path/to/config.json
```

or,

```js
module.exports = {
  ios: {
    id: 'com.awesome.ios',
    to: '/path/to'
  },
  android: {
    id: 'com.awesome.android',
    to: '/path/to'
  }
}
```

```bash
$ extract-pkg ios --config=/path/to/config.js
```

However, if you use `—id` with `—config`, even `id` value in JSON file exist, it will be ignored.

```bash
$ extract-pkg android --config=/path/to/config.json --id=com.use.this
```

## License

MIT
