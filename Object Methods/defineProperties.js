/*
Object.defineProperties(object, properties)


It will return the Object which was passed in the function.
It will return new or modified existing property of an object.

What is Enumerable?
enumerable means that particular value will not be part of any operation like for loop or Object.entries,
if enumerable is false it will be skipped through any loop.

ok means, if it is false, it will not take that value when we iterate an object by loop. Means it will not consider that value.
*/


const vehicle = {
    car: {
        name: 'Mustang GT',
        company: 'Ford'
    },
    bus: {
        name: 'Volvo',
        company: 'Scania'
    }
}

Object.defineProperties(vehicle, {
    bike: {
        value: {
            name: 'Ninja',
            company: 'Kawasaki',
            cc: 300
        },
        writable: false,
        enumerable: true, //it will count the bike, means it will enable 
        configurable: true,
    }, 
    //color: ['red', 'white'],
    color: {
        value: ['red', 'white'],
        writable: true,
        enumerable: false,
    },
    property1: {
        value: 'helicopter',
        writable: false,
        configurable: false,
        enumerable: false,
    }
})

vehicle.bike.name = 'Ninja ZR1000'
console.log(vehicle) // {car: {…}, bus: {…}, bike: {…}, color: Array(2), property1: 'helicopter'}
console.log(vehicle.property1) // helicopter

/*
Object.defineProperties(vehicle, {
    property1: {
        value: 'BMW RR',
    }
})
*/

//console.log(vehicle) //cannot redefine property1


/*
Object.defineProperty(object, property, descriptor)

here we can only define one property, instead ofthis we can define more properties in defineProperties().
*/

const animal = {
    pet: {
        name: 'Dog',
        breed: 'German Shephade'
    }
}

Object.defineProperty(animal, 'other', {
    value: 'Jaguar',
    writable: false,
})

animal.other = 'ASDF'
console.log(animal)


/*
It will throw an error, if you try to do -> animal.other = 'ASDF'
(() => {
    "use strict";
    const animal = { ... }
    ...
    return animal
})()
*/
