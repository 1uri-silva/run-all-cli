"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printVersion = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function printVersion() {
    const path = (0, path_1.join)(__dirname, '..', '..', '..', 'package.json');
    const { version } = JSON.parse((0, fs_1.readFileSync)(path, 'utf8'));
    console.log('v' + version);
}
exports.printVersion = printVersion;
