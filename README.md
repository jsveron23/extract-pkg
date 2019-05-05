# extract-pkg &middot; [![npm](https://img.shields.io/npm/v/extract-pkg.svg)](https://www.npmjs.com/package/extract-pkg) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.md)

Extract app package from iOS simulator or Android emulator. Before running this command, you must check 2 things.

- Simulator or emulator should be running
- The package file(.app or .apk) should be already installed

## Installation

```bash
$ npm install extract-pkg -g # or --save-dev
```

# Usage

```bash
$ extract-pkg ios --id=com.some.pkg --to=path/to
```

If did not use `--rename` or `-n`, the package file name will same as original file name.

```bash
$ extract-pkg android --id=com.some.pkg --to=path/to --rename=app-debug.apk
```

## License

MIT
