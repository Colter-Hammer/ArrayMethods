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

module.exports = {
    evens,
    oddIndexes,
    mean,
    sum
}
