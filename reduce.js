// .reduce()

const arr = [1, 2, 3, 4, 5]

const totalValue = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)

console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(totalValue); // 15
