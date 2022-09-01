import { printHelp } from './commands/help';
import { printVersion } from './commands/version';
import { parseArgs } from './commands/parseArgs';
import { readPackage } from './commands/readPackage';

export async function run(process: NodeJS.Process) {
	try {
		const commandsParsed = await parseArgs(process);
		const [keys] = Object.keys(commandsParsed);

		switch (keys) {
			case undefined:
			case 'h':
			case 'help':
				printHelp();
				return;
			case 'v':
			case 'version':
				printVersion();
				return;
			case 's':
			case 'script':
				await readPackage(commandsParsed);
				return;
		}
	} catch (error) {
		console.log(error);
		printHelp();
		process.exit(1);
	}
}
