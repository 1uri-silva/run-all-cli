import { exec as execute, spawn } from 'child_process';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import { SpawnConsoleColors } from '../set-colors';
type Params = {
	[x: string]: string;
};

export async function readPackage(commandsParsed: Params): Promise<void> {
	const colorsTerminal = new SpawnConsoleColors();
	const executeAsync = promisify(spawn);

	function forEachObject(
		someObj: any,
		callback?: (value: string | unknown) => any
	) {
		return Object.entries(someObj).forEach((entry) => {
			const [_, script] = entry;
			callback(script);
		});
	}

	const packagePath = resolve('package.json');
	const { scripts } = JSON.parse(readFileSync(packagePath, 'utf-8'));

	const script = Object.keys(scripts);
	const [values] = Object.values(commandsParsed);
	const e = values.replace(/(:\*)/g, '');

	forEachObject(script, async (s: string) => {
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
