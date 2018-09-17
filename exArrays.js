function evens(arr) {
    return arr.filter(item => {
        return item % 2 === 0;
    });
}

function oddIndexes(arr) {
    return arr.filter(item => {
        return item % 2 !== 0;
    });
}

function mean(arr) {
    let sum = arr.reduce((acc, item) => {
        return acc + item;
    }, 0);

    return sum / arr.length;
}

module.exports = {
    evens,
    oddIndexes,
    mean
}