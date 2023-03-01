/*
It will return boolean.
objectName.hasProperty(prop)
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

console.log(vehicle.hasOwnProperty('scooter')) // false
// it will return false in inherited properties.

// similarly for array
const fruits = ['Mango', 'Stawberry', 'Blueberry', 'Rasberry', 'Lichi']

console.log(fruits.hasOwnProperty(4)) // true, it only excepts index and one parameter


// problem with Object.create()
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
