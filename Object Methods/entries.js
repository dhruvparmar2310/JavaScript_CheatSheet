/*
Object.entries(object)

It will return an array of specified object. This array contents two element: 
    - first element = key (always in string)
    - second element = value (it can be anything)
*/
const car = 'car'
const fruits = {
    name: 'Strawberry',
    color: 'red',
    location: 'Mahabaleshwar',
    number: 1,
    100: '10',
    3: '9',
    2: 25,
}

for (const [key, value] of Object.entries(fruits)) {
    //console.log('key : ', key, '\nvalue : ', value, ',typeof : ', typeof value)
}


//console.log('entries : ', Object.entries(fruits)) // array[ array, array, array ]
//console.log(Object.entries(car)) // ['0', 'c'], ['1', 'a'], ['2', 'r'] for primitive
//console.log(Object.entries(100)) // [] for non primitive
//console.log('keys : ', Object.keys(fruits))
//console.log('values : ', Object.values(fruits))


/*
Convert Object to Map
*/
const map = new Map(Object.entries(fruits));
console.log('map : ', map)
