function evenIndexes(arr) {
    return arr.filter(item => item % 2 === 0);
}

function oddIndexes(arr) {
    return arr.filter(item => item % 2 !== 0);
}

function mean(arr) {
    return sum(arr) / arr.length;
}

function sum(arr) {
    return arr.reduce((acc, item) =>acc + item,0)
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log('EVEN: ', evenIndexes(array));
console.log('MEAN: ',mean(array));
console.log('SUM: ',sum(array));

module.exports = {
    evenIndexes,
    oddIndexes,
    mean,
    sum
}
