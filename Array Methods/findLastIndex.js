const array1 = [5, 12, 50, 130, 44];

const isLargeNumber = (element) => element > 45;

console.log(array1.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

//behind the hood with callback function

function findLastIndexMethod (arr, condition) {
    
    for (let i=arr.length; i>0; i--) {
        if (condition(arr[i])) return i
    }
    return -1
}

function condition (element) {
    return element > 45
}

console.log(findLastIndexMethod([5, 12, 50, 130, 44], condition))
