# bin-dir 

> Find the folder of a global command (installed via npm or not)

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
