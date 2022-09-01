export class SpawnConsoleColors {
	constructor() {}

	public red(message: string) {
		console.log('\x1b[31m', message);
	}
	public green(message: string) {
		console.log('\x1b[33m', message);
	}
	public magenta(message: string) {
		console.log('\x1b[35m', message);
	}
	public white(message: string) {
		console.log('\u001b[0m', message);
	}

	public bg_red(message: string) {
		console.log('\x1b[41m', message);
	}
	public bg_green(message: string) {
		console.log('\x1b[42m', message);
	}
	public bg_magenta(message: string) {
		console.log('\x1b[45m', message);
	}
	public bg_white(message: string) {
		console.log('\x1b[47m', message);
	}
}
