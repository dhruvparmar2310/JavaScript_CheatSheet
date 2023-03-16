const fruits = ['Mango', 'Apple', 'Strawberry', 'Orange', 'Green Apple', 'Kiwi', 'Banana']

// return modified array not new array, but it will not modify the array.length
/* array.copyWithin(target)
   array.copyWithin(target, start)
   array.copyWithin(target, start, end)
*/

//console.log(fruits.copyWithin(4)) // it will copy the array starting from targetted index, means from index 3, it will again start from Mango, Apple, ...
//console.log(fruits.copyWithin(0, 2)) // it will take elements from index 2 to end and than take the remaining elements such as kiwi, Banana to complete the array length.
//console.log(fruits.copyWithin(0, 4, 7)) // it will take elements form index 4 and prints it till end and than when the array is complete, it will prints the remaining elements.

// behind the hood
console.log('Behind the Hood')

function copyWithIn (target) {
   for (let i = 0; i < target; i++) {
      console.log(fruits[i])
   } 
    for (let x = 0; x < (fruits.length - target); x++) {
      console.log(fruits[x])
   }
}

const copyData = copyWithIn(5)
console.log('result: ', copyData)
