"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelp = void 0;
function printHelp() {
    console.log(`
Usage: run-all [OPTIONS] [COMMANDS...]
  
  Options:
    -h, --help      Print this help text.
    -v, --version   Print version number.
    -s, --script    Running many scripts passed: --script='build:*'
`);
}
exports.printHelp = printHelp;
