const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 20;

//console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

//behind the hood with callback function
function findIndexMethod (arr, condition) {
    
    for (let i=0; i< arr.length; i++) {
        if (condition(arr[i])) return i
    }
    return -1
}

function condition (element) {
    return element > 20
}

console.log(findIndexMethod([5, 12, 8, 130, 44], condition))
