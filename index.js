#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.6', '-v, --version')
  .parse(process.argv)

console.log("redux-smith")
