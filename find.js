// .find()

const arr = [1, 3, 4, 5, 6]
const oddArr = [1, 3, 5, 7, 9]

const findEvenInArr = arr.find(item => {
    return item % 2 === 0
})
console.log(findEvenInArr); // 4

const findEvenInOddArr = oddArr.find(item => {
    return item % 2 === 0
})
console.log(findEvenInOddArr); // undefined
