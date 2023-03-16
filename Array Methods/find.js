const array1 = [5, 12, 2, 130, 44];

const found = array1.find(element => element < 5);

//console.log(found);
// Expected output: 12


//behind the hood
/*
function findMethod (arr, element) {
    console.log('element', element)
    
    let newArr = []
    for (let i=0; i< arr.length; i++) {
        if (arr[i] < element) {
            return arr[i]
        }
    }
    return undefined
}

console.log(findMethod([5, 12, 2, 130, 44], 10))
*/

//behind the hood with callback function
function findMethod (arr, condition) {
    
    for (let item of arr) {
        if (condition(item)) return item
    }
    return undefined
}

function condition (element) {
    return element < 5
}

console.log(findMethod([5, 12, 2, 130, 44], condition))
