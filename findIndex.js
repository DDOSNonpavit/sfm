// .findIndex()

const arr = [1, 3, 4, 5, 6]
const oddArr = [1, 3, 5, 7, 9]

const findIndexEvenInArr = arr.findIndex(item => {
    return item % 2 === 0
})
console.log(findIndexEvenInArr); // 2

const findIndexEvenInOddArr = oddArr.findIndex(item => {
    return item % 2 === 0
})
console.log(findIndexEvenInOddArr); // -1