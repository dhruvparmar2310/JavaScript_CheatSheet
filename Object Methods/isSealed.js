/*
It will return boolean.

Syntax: 
Object.isSealed(obj)
*/

const vehicle = {
    car: {
        name: 'Mustang'
    }
}

console.log('Before Sealing...\nisSealed : ', Object.isSealed(vehicle))
const sealed = Object.seal(vehicle)
console.log('After Sealing...\nisSealed : ', Object.isSealed(vehicle))

/*
Object.defineProperties(vehicle, {
    property1: {
        value: 'helicopter',
        writable: true,
        configurable: false,
        enumerable: false,
    }
})

console.log(Object.isSealed(vehicle))
*/
