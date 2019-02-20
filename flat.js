// .flat()

const arr = [['black', 'white'], ['red', 'blue']]

const flatArr = arr.flat()
console.log(flatArr); // [ 'black', 'white', 'red', 'blue' ]

const array = [
    [
        ['black'], ['white']
    ],
    [
        ['red'], ['blue']
    ]
]

const flatArray = array.flat()
console.log(flatArray); // [ [ 'black' ], [ 'white' ], [ 'red' ], [ 'blue' ] ]

const flatDeepArray = array.flat(2)
console.log(flatDeepArray); // [ 'black', 'white', 'red', 'blue' ]

const infinityFlatArray = array.flat(Infinity)
console.log(infinityFlatArray); // [ 'black', 'white', 'red', 'blue' ]

const arrays = [ 'black', 'white', , 'red', , 'blue' ]
console.log(arrays); // [ 'black', 'white', <1 empty item>, 'red', <1 empty item>, 'blue' ]

const flatHolesInArray = arrays.flat()
console.log(flatHolesInArray); // [ 'black', 'white', 'red', 'blue' ]
