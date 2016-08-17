# bin-dir 

> Find or open the folder of a command (installed via npm or not)

Two commands:

* `bin-dir package|bin`: shows the directory
* `open-bin-dir package`: opens the resolved directory in macOS finder
	`open` only works on macOSX.
	If you want cross-os compatibility, suggest an alternative to macOS’ `open` command

## Usage

```sh
$ bin-dir npm
/usr/local/lib/node_modules/npm

$ bin-dir wget
/usr/local/Cellar/wget/1.18/bin

$ open-bin-dir wget
// Opens the resolved directory in macOS finder
```

## Install

```sh
npm install --global bin-dir 
```

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
