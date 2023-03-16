// it will return modified array, filled with values. It will not change the length of array.
const fruits = ['Mango', 'Apple', 'Strawberry', 'Orange', 'Green Apple', 'Kiwi', 'Banana']

//console.log(fruits.fill({name: "Dhruv", age: 22}))
//console.log(fruits.fill('Blueberry', 2))
//console.log(fruits.fill('Blueberry', 0, 2))

// behind the hood
function fillMethod (arr, value, start, end) {
   console.log(arr, value, start)
   for (let ele of arr) {
      console.log(ele)
   }
   
   let newArr=[]
    for (let x = start; x < arr.length; x++) {
       arr[x] = value
       newArr.push(arr[x])
   }
   return newArr
}

console.log(fillMethod(['a', 'b', 'c', 'd', 'e'], 'e', 3))
