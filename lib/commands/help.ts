export function printHelp() {
	console.log(`
Usage: run-all [OPTIONS] [COMMANDS...]
  
  Options:
    -h, --help      Print this help text.
    -v, --version   Print version number.
    -s, --script    Running many scripts passed: --script='build:*'
`);
}
