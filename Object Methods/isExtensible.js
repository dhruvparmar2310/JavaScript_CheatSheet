/*
It will return boolean.

Syntax:
Object.isExtensible(obj)

By default all the objects are extensible. To stop any object by extending, we can use: 
Object.preventExtensions(), Object.freeze(), Object.seal() or Reflect.preventExtensions
*/

const obj = {};

console.log(Object.isExtensible(obj)); // true

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
