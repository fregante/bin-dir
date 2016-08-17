#!/bin/bash
PATH=$(npm bin):$PATH
bin=$(which "$1")
realbin=$(realpath "$bin")
bindir=$(pkg-dir "$realbin")
if [[ ! $bindir ]]; then
	bindir=$(dirname "$realbin")
fi
echo "$bindir"