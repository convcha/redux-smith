#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.5', '-v, --version')
  .parse(process.argv)

console.log("redux-smith...")
