"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpawnConsoleColors = void 0;
class SpawnConsoleColors {
    constructor() { }
    red(message) {
        console.log('\x1b[31m', message);
    }
    green(message) {
        console.log('\x1b[33m', message);
    }
    magenta(message) {
        console.log('\x1b[35m', message);
    }
    white(message) {
        console.log('\u001b[0m', message);
    }
    bg_red(message) {
        console.log('\x1b[41m', message);
    }
    bg_green(message) {
        console.log('\x1b[42m', message);
    }
    bg_magenta(message) {
        console.log('\x1b[45m', message);
    }
    bg_white(message) {
        console.log('\x1b[47m', message);
    }
}
exports.SpawnConsoleColors = SpawnConsoleColors;
