#!/usr/bin/env node

const program = require('commander')

program
  .version('0.0.1', '-v, --version')
  .parse(process.argv)

console.log("I'm redux-smith!")
