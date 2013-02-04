
var csv = require('csv');
var fs = require('fs')

var filter = function(pathIn, pathOut, column, regex, cb) {
  csv()
    .from.path(pathIn, {columns: true})
    .to.path(pathOut, {header: true})
    .transform(function(row){
      if(regex.test(row[column])) {
        return row
      } else {
        return null
      }
    })
    .on('end', cb)
}

module.exports = filter