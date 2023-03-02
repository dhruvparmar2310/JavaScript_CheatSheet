const carObj = {
    name: 'Mustang GT',
    comapny: 'Ford',
    color: 'Red',
    model: '4K untra',
    price: 80
}
const car = new Object()

car.name = 'Mustang'
console.log(carObj.length) // undefined, its cannot be countable.

//display the contructor function
function carName (name, price) {
    this.name = name;
    this.price = price;
}

const displayCarName = new carName('Buggatti Veron', '1 Cr')
//console.log(displayCarName.constructor)
//console.log(displayCarName)


/*
object.assign(), it will return modified object. It will return target object. 

Syntax:
Object.assign(target, ...source)

Behind the hood:
Object.assign(set, get)
*/
const target = {
    a: 1,
    b: 2
}

const source = {
    a: 10,
    c: 20
}

//console.log(Object.assign(target))
//console.log(Object.assign(target, source))
//console.log(Object.assign(target, source) == target) // true


const o1 = { a: 1 };
const o2 = { b: 2, c: 3 };
const o3 = { c: 30 };
const o4 = { name: 'abc' }

const obj = Object.assign(o1, o2, o3);
const copyObj = Object.assign({}, o1, null, o2, undefined, o4)
console.log('copyObj :>> ', copyObj) // {a: 1, b: 2, c: 3, name: 'abc'}, it will ignore null and undefined.
console.log(obj); // { a: 1, b: 2, c: 30 }
console.log(o1); // { a: 1, b: 2, c: 30 }, target object itself is changed.
console.log(o2); // { b: 2, c: 3 }
