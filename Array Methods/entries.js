// returns new iterator object, with key/value pair.
const fruits = ['Mango', 'Apple', 'Strawberry', 'Orange', 'Green Apple', 'Kiwi', 'Banana']

const iterator = fruits.entries()



//console.log(iterator) // returns empty object
console.log(iterator.next()) // Object { value: Array [0, 'Mango'], done: false }
//console.log(iterator.next().value) // will return an array of key/value pair of first index.
//console.log(iterator.next().value)
//console.log(iterator.next().value)
//console.log(iterator.next().value)
//console.log(iterator.next().value)
//console.log(iterator.next().value)
//console.log(iterator.next().value)

// to print all elements iterate it by loop
for (let [index, elements] of iterator) {
    console.log(index, elements)
}

/*
Tips: Also see the documentation for generator and iterator.
*/
