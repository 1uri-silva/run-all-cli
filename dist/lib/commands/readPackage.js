"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readPackage = void 0;
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
const set_colors_1 = require("../set-colors");
async function readPackage(commandsParsed) {
    const colorsTerminal = new set_colors_1.SpawnConsoleColors();
    const executeAsync = (0, util_1.promisify)(child_process_1.spawn);
    function forEachObject(someObj, callback) {
        return Object.entries(someObj).forEach((entry) => {
            const [_, script] = entry;
            callback(script);
        });
    }
    const packagePath = (0, path_1.resolve)('package.json');
    const { scripts } = JSON.parse((0, fs_1.readFileSync)(packagePath, 'utf-8'));
    const script = Object.keys(scripts);
    const [values] = Object.values(commandsParsed);
    const e = values.replace(/(:\*)/g, '');
    forEachObject(script, async (s) => {
        if (!s.startsWith(e)) {
            throw new Error(`ERROR: ${e} not found`);
        }
        const data = await executeAsync('npm', [s], {
            cwd: undefined,
            env: process.env,
            stdio: 'inherit',
        });
        console.log(data);
    });
}
exports.readPackage = readPackage;
