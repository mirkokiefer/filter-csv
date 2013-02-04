
var filterCSV = require('../lib/index')
var fs = require('fs')
var assert = require('assert')

var col = "description"
var regex = new RegExp("wunder", "i")
var input = __dirname + '/test.csv'
var output = __dirname + '/filtered.csv'
var expected = __dirname + '/expected.csv'

it('should filter a csv file', function(done) {
  var testResult = function() {
    var expectedResult = fs.readFileSync(expected, 'utf8')
    var result = fs.readFileSync(output, 'utf8')
    assert.equal(result, expectedResult)
    fs.unlinkSync(output)
    done()
  }

  filterCSV(input, output, col, regex, testResult)  
})

