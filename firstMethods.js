function evens(arr) {
    return arr.filter(item => {
        return item % 2 === 0;
    });
}

function mean(arr) {
    let sum = arr.reduce((acc,item) => {
        return acc + item;
    }, 0);

    return sum/arr.length;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(evens(array));
console.log(mean(array));

