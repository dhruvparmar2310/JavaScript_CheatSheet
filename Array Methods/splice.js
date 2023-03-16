const months = ['Jan', 'March', 'April', 'June'];
months.splice(2);
// Inserts at index 1
//console.log(months);
// Expected output: Array ["Jan", "March"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//behind the hood
function spliceMethod (arr, start, deleteCount, newElement) {
    //console.log(newElement)
    var newArr = []
    for (let i=0; i < start; i++) {
        newArr.push(arr[i])
        //console.log(arr[i])
    }
    if (start > arr.length) {
        newArr = arr
        return newArr
    }
    if (start > deleteCount) {
        //console.log('deleted Element: ', arr[start])
        if (deleteCount === 0  && !newElement) {
            return arr
        }
        newArr = arr.filter((item) => item !== arr[start])
    }
    if (deleteCount >  start) {
        //newArr = arr.filter((item) => item !== arr[start])
        for (let i=0; i < arr[start]; i++) {
            //newArr = newArr.push(arr[i])
            console.log(arr[i])
        }    
    }
    if (start === deleteCount) {
        if (start === 1 && deleteCount === 1) {
            return arr
        }
        for (let i=0; i < arr[start]; i++) {
            //newArr = newArr.push(arr[i])
            console.log(arr[i])
        }        
    }
    if (newElement) {
        if (start > deleteCount) {
            newArr[1] = newElement
        }
    }
    console.log('newArr: ', newArr)
}

console.log(spliceMethod(['Jan', 'March', 'April', 'June'], 2, 1))
