#!/usr/bin/env node
const binDir = require('..');
const open = require('open');

open(binDir(process.argv[2]));
