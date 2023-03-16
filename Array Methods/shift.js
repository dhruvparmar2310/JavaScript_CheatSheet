//const array1 = [1, 2, 3];

//const firstElement = array1.shift();

//console.log(array1);
// Expected output: Array [2, 3]

//console.log(firstElement);
// Expected output: 1


//behind the hood
function shiftMethod (arr, count) {
    //console.log(arr)
    let newArr, popedElement = [];
    if (count > 1) {
        for (let i=0; i<arr.length - 1; i++) {
            popedElement = arr[count]
            console.log(popedElement)
            newArr = arr.filter((item) => item !== arr[count])
        }
    }
    for (let i=0; i<arr.length; i++) {
        popedElement = arr[count - 1]
        console.log(popedElement)
        newArr = arr.filter((item) => item !== arr[0])
    }
    if (!arr.length) {
        return undefined
    }
    console.log(newArr)
}

console.log(shiftMethod([10, 20, 30, 40, 50], 2))
