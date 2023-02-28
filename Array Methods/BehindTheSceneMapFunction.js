/*
Array.map((data, index, array) => data, thisArg)

first argument is callback function
*/

const arr = [1, 2, 3, 4, 5]
const newArr = []

function doThis(element) {
    return element * 2
}

function Mapping (arr, Func) {
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Func(arr[i]))
    }
    return newArr
}

console.log('old Array : ', arr);
console.log('newArr : ', Mapping(arr, doThis))


