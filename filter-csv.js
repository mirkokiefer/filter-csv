#!/usr/bin/env node

var filterCSV = require('./lib/index')
var path = require('path')

var argv = require('optimist')
    .usage('Filter a csv file by values matching a Regular Expression.\nUsage: $0 -i [input-path] -o [output-path] -c [column] -r [regex]')
    .demand(['i', 'o', 'c','r'])
    .alias('i', 'input')
    .alias('o', 'output')
    .alias('c', 'column')
    .alias('r', 'regex')
    .argv;

var cwd = process.cwd()
var input = path.resolve(cwd, argv.i)
var output = path.resolve(cwd, argv.o)
var column = argv.c
var regex = argv.r

console.log("input: " + input)
console.log("\nfiltering...\n")

filterCSV(input, output, column, new RegExp(regex, 'i'), function() {
  console.log("completed")
  console.log("result written to: " + output)
})