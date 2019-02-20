// .slice() => array.slice(begin, end)

const teamAvengers = [
    'Captain America',
    'Iron Man',
    'Thor',
    'Hulk',
    'Dockor Strange'
]

const sliceWithNoEnd = teamAvengers.slice(2)
console.log(sliceWithNoEnd); // [ 'Thor', 'Hulk', 'Dockor Strange' ]

const sliceWithEnd = teamAvengers.slice(1, 5)
console.log(sliceWithEnd); // [ 'Iron Man', 'Thor', 'Hulk', 'Dockor Strange' ]

const str = 'Team Avengers'

const sliceString = str.slice(3, 10)
console.log(sliceString); // 'm Aveng'
