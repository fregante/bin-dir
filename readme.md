# bin-dir 

> Find or open the folder of a global command (installed via npm or not)

## Install

```sh
npm install --global bin-dir 
```

## CLI

* `bin-dir` shows the directory

	```sh
	$ bin-dir npm
	/usr/local/lib/node_modules/npm

	$ bin-dir wget
	/usr/local/Cellar/wget/1.18/bin

	$ bin-dir unicorns
	// no output
	```

* `open-bin-dir` opens the resolved directory in macOS finder

	```sh
	$ open-bin-dir wget
	// Opens the resolved directory in macOS finder
	```

## API

```js
const binDir = require('bin-dir');

binDir('xo') === '/usr/local/lib/node_modules/xo';
binDir('brew') === '/usr/local/bin';
binDir('unicorns') === undefined;
```

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
