/*
Syntax:
Object.fromEntries(iterable)

It returns the new object. Here iterable can be Array or Map, containing a list of object. It must have to elements: 
1) 0 index: object key, always in string
2) 1 index: object value, which can be any thing, string, number, object, etc.

It is reverse of Object.entries()
*/


// converting Map to an Object
const car = new Map([
    ['name', 'Mustang GT'],
    ['company', 'Ford'],
    ['price', '85 lakhs']
])

const carObject = Object.fromEntries(car)
console.log('Converting Map into an Object')
console.log('carObject :>> ', carObject) // {name: 'Mustang GT', company: 'Ford', price: '85 lakhs'}

// converting Array to an Object, we need to write only array inside array, other than array cannot be converted.
const bike = [
    ['name', 'Ninja'],
    ['company', 'Kawasaki'],
    ['price', '3.40 lakhs'],
    ['cc', 300],
    ['0', [1, 2, 3]],
    ['1', {
        name: 'Dhruv Parmar'
    }],
  [52], // value will be undefined by defualt
  {'abc': 'abc'} // undefined: undefined, because it only work for array
]

const bikeObject = Object.fromEntries(bike)
console.log('Converting Array into an Object')
console.log('bikeObject :>> ', bikeObject) // {0: Array(3), 1: {…}, 52: undefined, name: 'Ninja', company: 'Kawasaki', price: '3.40 lakhs', cc: 300, undefined: undefined}


// other transformation
const obj = { a: 1, b: 2, c: 3 };

const newObject = Object.entries(obj)
console.log('object.entries : ', newObject) // (3) [Array(2), Array(2), Array(2)]
const newObj = Object.fromEntries(
  Object.entries(obj).map(([key, val]) => [key, val * 10]),
);

console.log(newObj); // {a: 10, b: 20, c: 30}
