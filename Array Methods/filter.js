/*
Filter method returns the new array. If the filter method does not satisfy the given condition
it will return the empty array.
*/


const fruits = [
    {
        'name': 'Mango',
        price: '100'
    },
    {
        'name': 'Apple',
        price: '110'
    },
    {
        'name': 'Green Apple',
        price: '15'
    },
    {
        'name': 'Custard apple',
        price: '35'
    },
    {
        'name': 'Ashwagandha',
        price: '25'
    },
    {
        'name': "Amla",
        price: '38'
    },
    {
        'name': 'Strawberry',
        price: '10'
    },
    {
        'name': 'Blueberry',
        price: '50'
    },
    {
        'name': 'Banana',
        price: '5'
    },
    {
        'name': 'Blackberry',
        price: '40'
    },
    {
        'name': 'Kiwi',
        price: '20'
    }
]

const filterArr = fruits.filter((item, index, arr) => {
    //if (item.price < 5) return item // returns empty array, because the condition is not satisfied.
    if (item.price < 50) return item
    //console.log(item, index, arr)
    //return item.name.startsWith('B')
    //return item.name.toLowerCase() //it will not work, it will work in array.map() method.
})
//console.log(filterArr)


//searching through filter
function filterItems(arr, query) {
  return arr.filter((el) => el.name.toLowerCase().includes(query.toLowerCase()));
}

//console.log(filterItems(fruits, "bl")); // Array of Blueberry and Blackberry


//behind the hood
function filterMethod (arr, callback, index) {

} 

console.log(filterMethod([1, 20, 5, 25, 100, 50, 10], getLessThan(50)))
