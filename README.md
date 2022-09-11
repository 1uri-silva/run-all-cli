# npm-run-all-cli

[![npm version](https://img.shields.io/npm/v/npm-run-all-cli.svg)](https://www.npmjs.com/package/npm-run-all-cli)
[![Downloads/month](https://img.shields.io/npm/dm/npm-run-all-cli.svg)](http://www.npmtrends.com/npm-run-all-cli)

A CLI to run multiple npm-scripts in sequential.

## 💿 Installation

```bash
$ npm install npm-run-all-cli --save-dev
# or
$ yarn add -D npm-run-all-cli
```

- It requires `Node@>=15`.

## 📖 Usage

example:

```json
//package.json

{
  "scripts": {
    "start": "npm start"
    "start:dev": "npm start dev",
    "start:prod": "npm start prod",
  }
}
```

```bash
  $ run-all -s=start:*
```

```ts
  Usage: run-all [COMMANDS...]

    Options:
      -h, --help      Print this help text.
      -v, --version   Print version number.
      -s, --script    Running many scripts passed: --script=build:*
```

#### Yarn Compatibility

- For now it is not compatible 😔

## 📰 Changelog

- https://github.com/1uri-silva/run-all-cli/releases

## 🍻 Contributing

Welcome♡

### Bug Reports or Feature Requests

Please use GitHub Issues.
