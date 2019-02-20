// .flatMap()

const arr = [ 'black', 'white', 'red', 'blue' ]
const codes = ['#000000', '#FFFFFF', '#FF0000', '#0000FF']

const mapArr = arr.map((color, index) => [color, codes[index]])
console.log(mapArr); 
/*
[ [ 'black', '#000000' ],
  [ 'white', '#FFFFFF' ],
  [ 'red', '#FF0000' ],
  [ 'blue', '#0000FF' ] ]
*/

const flatMapArr = arr.flatMap((color, index) => [color, codes[index]])
console.log(flatMapArr);
/*
[ 'black',
  '#000000',
  'white',
  '#FFFFFF',
  'red',
  '#FF0000',
  'blue',
  '#0000FF' ]
*/
