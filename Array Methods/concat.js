const arr = [1, 2, 3, 4]
const brr = ['Dhruv', 'Parmar']

//console.log(arr.concat(brr))

//behind the hood
function concatMethod (arr, brr, crr) {
    console.log(arr + ',' + brr)
    if (Array.isArray(crr)) {
        console.log(arr + ',' + brr + ',' + crr)
    }
}

console.log(concatMethod([1, 2, 3, 4], ['Dhruv', 'Parmar']))
