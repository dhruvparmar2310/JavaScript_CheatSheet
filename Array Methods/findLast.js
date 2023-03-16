const array1 = [5, 12, 50, 130, 44, 150];

const found = array1.findLast((element) => element < 50);

console.log(found);
// Expected output: 45

//behind the hood with callback function

function findLastMethod (arr, condition) {
    
    for (let i=arr.length; i>0; i--) {
        if (condition(arr[i])) return arr[i]
    }
    return undefined
}

function condition (element) {
    return element < 50
}

console.log(findLastMethod([5, 12, 50, 130, 44, 150], condition))

