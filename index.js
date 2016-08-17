const dirname = require('path').dirname;
const which = require('which').sync;
const realpath = require('fs.realpath').realpathSync;
const pkgDir = require('pkg-dir').sync;

module.exports = pkg => {
	let bin;
	try {
		bin = realpath(which(pkg));
	} catch (err) {
		return;
	}
	const module = pkgDir(bin);
	if (module) {
		return module;
	}
	return dirname(bin);
};
