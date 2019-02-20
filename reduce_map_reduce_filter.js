const arr = [1, 2, 3, 4, 5]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

const reduceAsMap = arr.reduce((acc, curr) => {
    const multiplyByTwo = curr * 2
    return [...acc, multiplyByTwo]
}, [])
console.log(reduceAsMap); // [ 2, 4, 6, 8, 10 ]

const reduceAsFilter = arr.reduce((acc, curr) => {
    const evenNumber = curr % 2 === 0
    if (evenNumber) {
        return [...acc, curr]
    }
    return [...acc]
}, [])
console.log(reduceAsFilter); // [ 2, 4 ]
