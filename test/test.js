var tap = require('tap');
var exArray = require('../exArrays.js');

var testArr = [1, 5, 7, 6, 23, 4, 3];

tap.test('method:evens', test => {
    tap.equal(exArray.evens(testArr)[0], 6);
    tap.equal(exArray.evens(testArr)[1], 4);
    tap.equal(exArray.evens(testArr).length, 2);
    test.end();
});

tap.test('method:mean', test => {
    tap.equal(exArray.mean(testArr), 7);
    test.end();
});