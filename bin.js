#!/usr/bin/env node
const binDir = require('.');

const dir = binDir(process.argv[2]);

if (dir) {
	console.log(dir);
}