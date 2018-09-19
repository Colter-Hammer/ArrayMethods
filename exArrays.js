/**
 * Returns an array of all even number indexes in the target array
 * @param {number[]} arr 
 */
function evenIndexes(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.filter(item => item % 2 === 0);
}

/**
 * Returns an array of all odd number indexes in target array
 * @param {number[]} arr 
 */
function oddIndexes(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.filter(item => item % 2 !== 0);
}

/**
 * Returns the mean of the target array
 * @param {number[]} arr 
 */
function mean(arr) {
    if (!checkType(arr, 'number')) return;
    return sum(arr) / arr.length;
}

/**
 * Adds all numbers in the target array together
 * @param {number[]} arr 
 */
function sum(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.reduce((acc, item) => acc + item);
}

/**
 * The result of all numbers in target array subtracted from each other
 * @param {numbers[]} arr 
 */
function difference(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.reduce((acc, item) => acc - item);
}

/**
 * Multiplies all numbers of target array together
 * @param {number[]} arr 
 */
function product(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.reduce((acc, item) => acc * item);
}

/**Returns the result of all numbers in target array being divided, sequentially
 * 
 * @param {number[]} arr 
 */
function quotient(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.reduce((acc, item) => acc / item);
}

/**
 * Converts all number items in the array to strings
 * @param {number[]} arr 
 */
function convertToString(arr) {
    if (!checkType(arr, 'number')) return;
    return arr.map(item => item.toString());
}

/**
 * Converts all string items in the array to numbers
 * @param {*[]} arr 
 * @param {number} base 
 */
function convertToNumber(arr, base = 10) {
    return arr.map(item => parseInt(item, base));
}

/**
 * Returns true or false if every member of the array is the provided type. This will also be used internally quite frequently. Ex. To use sum(), we will have to check that all members of the target array are numbers.
 * @param {*[]} arr 
 * @param {string} type Specify what type to check for
 */
function checkType(arr, type) {
    // possible types: 'undefined', 'object', 'boolean', 'number', 'string', 'symbol', 'function'
    return arr.every(item => typeof item === type);
}

module.exports = {
    evenIndexes,
    oddIndexes,
    mean,
    sum,
    difference,
    product,
    quotient,
    convertToString,
    convertToNumber,
    checkType
}
