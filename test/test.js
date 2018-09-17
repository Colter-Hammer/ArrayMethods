var tap = require('tap');
var exArray = require('../firstMethods.js');

var testArr = [1, 5, 7, 23, 4];

console.log(exArray.evens(testArr))
tap.equal(exArray.evens(testArr), [4]);