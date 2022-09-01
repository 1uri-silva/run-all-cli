"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArgs = void 0;
async function parseArgs({ argv }) {
    const args = ['script', 'help', 'version', 'v', 's', 'h'];
    const [nodePath, filePath, ...command] = argv;
    const [formatCommand] = command.map((val) => {
        const [command, script] = val.replace(/(-)/g, '').split('=');
        const data = { [command]: script ?? '' };
        const commandMatch = args.includes(command);
        if (!commandMatch) {
            throw new Error(`ERROR: Command not found`);
        }
        return data;
    });
    return formatCommand;
}
exports.parseArgs = parseArgs;
