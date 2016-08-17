# bin-dir 

> Find the folder of a global command (installed via npm or not)

This is essentially a cross-os command for `which` + `realpath` + `dirname` plus special support for npm modules.

"Special support" means that `bin-dir eslint` won't open the directory `.../eslint/bin` but `.../eslint`

## Install

```sh
npm install --global bin-dir 
```

## CLI

```sh
$ bin-dir npm
/usr/local/lib/node_modules/npm

$ bin-dir wget
/usr/local/Cellar/wget/1.18/bin

$ bin-dir unicorns
// no output
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
