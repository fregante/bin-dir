#!/usr/bin/env node
const binDir = require('..');
const open = require('open');

const dir = binDir(process.argv[2]);

if (dir) {
	open(dir);
}