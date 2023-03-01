/*
It will return boolean.
It is used to check weather the two values are same values.

Syntax:
Object.is(value1, value2)
*/

console.log(Object.is('1', 1)); // Expected output: false

console.log(Object.is(NaN, NaN)); // Expected output: true

console.log('null & undefined : ', Object.is(null, undefined)); // Expected output: false

console.log(Object.is(null, null)); // Expected output: true

console.log(Object.is(-0, 0)); // Expected output: false

const obj = {};
console.log(Object.is(obj, {})); // Expected output: false

const arr = [1 , 2, 3]
const copy = arr
console.log('compare original & copy array : ', Object.is(arr, copy)); // Expected output: true


const arr1 = [1]
const arr2 = [[1]]
const arr3 = []
const arr4 = [null]

console.log('arr1 & arr2 : ', Object.is(arr1, arr2)); // Expected output: false
console.log('arr3 & arr4 : ', Object.is(arr3, arr4)); // Expected output: false

console.log('Car & car : ', Object.is('Car', 'car')); // Expected output: false

console.log('[] & [] : ', Object.is([], [])); // false, similar to {} & {}

console.log('NaN & (0 / 0) : ', Object.is(NaN, 0 / 0)); // true
console.log('NaN & Number.NaN : ', Object.is(NaN, Number.NaN)); // true
