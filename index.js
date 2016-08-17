#!/usr/bin/env node
const dirname = require('path').dirname;
const which = require('which').sync;
const realpath = require('fs.realpath').realpathSync;
const pkgDir = require('pkg-dir').sync;

module.exports = pkg => {
	const bin = realpath(which(pkg));
	const module = pkgDir(bin);
	if (module) {
		return module;
	}
	return dirname(bin);
};
