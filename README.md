# run-all-cli

[![npm version](https://img.shields.io/npm/v/run-all-cli.svg)](https://www.npmjs.com/package/run-all-cli)
[![Downloads/month](https://img.shields.io/npm/dm/run-all-cli.svg)](http://www.npmtrends.com/run-all-cli)

A CLI to run multiple npm-scripts in sequential.

## 💿 Installation

```bash
$ npm install run-all-cli --save-dev
# or
$ yarn add -D run-all-cli
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
