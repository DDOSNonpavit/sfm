// .splice() => array.splice(start, deleteCount, item1, item2, ...)

const teamAvengers = [
    'Captain America',
    'Iron Man',
    'Thor',
    'Hulk',
    'Dockor Strange'
]

// Remove
teamAvengers.splice(1, 3)
console.log(teamAvengers); // [ 'Captain America', 'Dockor Strange' ]

// Add
teamAvengers.splice(2, 0, 'Spider-Man')
console.log(teamAvengers); // [ 'Captain America', 'Dockor Strange', 'Spider-Man' ]

// Replace
teamAvengers.splice(3, 1, 'Ant-Man')
console.log(teamAvengers); // [ 'Captain America', 'Dockor Strange', 'Spider-Man', 'Ant-Man' ]