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
console.log('carObject :>> ', carObject)

// converting Array to an Object
const bike = [
    ['name', 'Ninja'],
    ['company', 'Kawasaki'],
    ['price', '3.40 lakhs'],
    ['cc', 300],
    ['0', [1, 2, 3]],
    ['1', {
        name: 'Dhruv Parmar'
    }]
]

const bikeObject = Object.fromEntries(bike)
console.log('Converting Array into an Object')
console.log('bikeObject :>> ', bikeObject)
