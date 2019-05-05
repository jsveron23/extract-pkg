# extract-pkg &middot; [![npm](https://img.shields.io/npm/v/extract-pkg.svg)](https://www.npmjs.com/package/extract-pkg) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)

Extract app package from iOS simulator or Android emulator. Before running this command, you must check 2 things.

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

If did not use `--to` or `-d`, it will use same path where command executed.

```bash
$ extract-pkg ios --id=com.some.pkg --to=path/to
```

If did not use `--rename` or `-n`, the package file name will same as original file name.

```bash
$ extract-pkg android --id=com.some.pkg --to=path/to --rename=app-debug.apk
```

## JSON file support

You can provide JSON file as options.

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

But if you use like this way, `id` value in JSON file will be ignored.

```bash
$ extract-pkg android --config=/path/to/config.json --id=com.use.this
```

## License

MIT
