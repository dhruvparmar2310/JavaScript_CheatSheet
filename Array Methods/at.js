const fruits = ['Mango', 'Apple', 'Strawberry', 'Grapes', 'Kiwi']
               // [0, 1, 2, 3, 4]
               // [0, -4, -3, -2, -1]
//console.log(fruits.at(2))
//console.log(fruits.at(-3))

// it will return 'undefined' if 'index < -arr.length' or 'index >= arr.length'
/* with the help of 'arr.at()' we can find last index element
   which normal array can't do.
*/


// behind the hood
function IndexAt (arr, index) {
   if (index >= 0) {
      return arr[index]
   }
   else {
      let elementIndex = arr.length + index // logic: (array.length - index)
      return arr[elementIndex]
   }
   
}

console.log('Behind the Hood')
console.log(IndexAt(['Dhruv', 'Sahil', 'Isha'], -1))
//console.log(IndexAt(-1))
