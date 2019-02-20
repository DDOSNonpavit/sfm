// .filter()

const arr = [1, 2, 3, 4, 5]
const evenNumbers = arr.filter(value => {
    return value % 2 === 0
})

console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(evenNumbers); // [ 2, 4 ]
