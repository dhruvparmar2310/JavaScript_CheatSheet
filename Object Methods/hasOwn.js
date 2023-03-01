/*
It will return boolean. It will return 'true', if the object has specified 
property (key).

Syntax:
Object.hasOwn(object, property)
*/

const vehicle = {
    cars: {
        count: 5,
        type: 'Sedan'
    },
    bike: {
        count: 2,
        type: 'Sport'
    }
}

console.log('check for bike : ', Object.hasOwn(vehicle, 'bike'))
console.log('check for scooter (before assigning) : ', Object.hasOwn(vehicle, 'scooter'))

vehicle.scooter = null;
console.log('check for scooter (after assigning) : ', Object.hasOwn(vehicle, 'scooter')) 
// it will return 'true' with null value, similar with 'undefined'.


'constructor' in vehicle; /* it will return 'true' if it is direct or inherited properties.
it will return 'true' in all the properties declare in [Prototype] of vehcile. It can be toString, hasOwnProperty, etc. */


// similarly for array
const fruits = ['Mango', 'Stawberry', 'Blueberry', 'Rasberry', 'Lichi']

console.log('check if 2nd index exist : ', Object.hasOwn(fruits, 2))
console.log('check if 5th index exist : ', Object.hasOwn(fruits, 5))

