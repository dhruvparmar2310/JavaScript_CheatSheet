//const array1 = [1, 2, 3];

//console.log(array1.unshift(4));
// Expected output: 5

//console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]


//behind the hood
function unshiftMethod (arr, element) {
    //console.log(arr, element)
    let newArr = [element, ...arr]

    if (Array.isArray(element)) {
        newArr = [...element, ...arr]
    }
    console.log('newArr: ', newArr)
}

//console.log(unshiftMethod([1, 2, 3], 4))
console.log(unshiftMethod([1, 2, 3], [4, 5, {'name': 'Dhruv'}]))
