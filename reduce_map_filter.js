const arr = [1, 2, 3, 4, 5]
console.log(arr); // [ 1, 2, 3, 4, 5 ]

const evenNumbers = arr.filter(value => {
    return value % 2 === 0
})
console.log(evenNumbers); // [ 2, 4 ]

const multiplyByThree = evenNumbers.map(value => {
    return value * 3
})
console.log(multiplyByThree); // [ 6, 12 ]

const totalValue = multiplyByThree.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(totalValue); // 18
