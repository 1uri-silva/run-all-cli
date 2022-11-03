# npm-run-all-cli

A CLI to run multiple npm-scripts in sequential.

Project removed npm

## 💿 Installation

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

## 🍻 Contributing

Welcome♡

### Bug Reports or Feature Requests

Please use GitHub Issues.
