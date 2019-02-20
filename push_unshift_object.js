const arr = [1, 2, 3, 4, 5]
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(arr.length); // 5

const secondArr = [6, 7, 8, 9, 10]
arr.push(secondArr)
console.log(arr); // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]
console.log(arr.length); // 6
