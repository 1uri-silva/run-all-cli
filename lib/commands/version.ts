import { readFileSync } from 'fs';
import { join } from 'path';

export function printVersion() {
	const path = join(__dirname, '..', '..', '..', 'package.json');

	const { version } = JSON.parse(readFileSync(path, 'utf8'));

	console.log('v' + version);
}
