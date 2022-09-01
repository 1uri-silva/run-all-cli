"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const help_1 = require("./commands/help");
const version_1 = require("./commands/version");
const parseArgs_1 = require("./commands/parseArgs");
const readPackage_1 = require("./commands/readPackage");
async function run(process) {
    try {
        const commandsParsed = await (0, parseArgs_1.parseArgs)(process);
        const [keys] = Object.keys(commandsParsed);
        switch (keys) {
            case undefined:
            case 'h':
            case 'help':
                (0, help_1.printHelp)();
                return;
            case 'v':
            case 'version':
                (0, version_1.printVersion)();
                return;
            case 's':
            case 'script':
                await (0, readPackage_1.readPackage)(commandsParsed);
                return;
        }
    }
    catch (error) {
        console.log(error);
        (0, help_1.printHelp)();
        process.exit(1);
    }
}
exports.run = run;
