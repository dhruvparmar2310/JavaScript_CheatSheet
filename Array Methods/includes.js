const array1 = [1, 2, 3];

//console.log(array1.includes(2));
// Expected output: true

//const pets = ['cat', 'dog', 'bat'];

//console.log(pets.includes('cat'));
// Expected output: true

//console.log(pets.includes('at'));
// Expected output: false


//behind the hood
function includesMethod (arr, element) {
    for (let item of arr) {
        if (item === element) return true
    }
    return false
}

//console.log(includesMethod([1, 2, 3], 5))
console.log(includesMethod(['cat', 'dog', 'bat'], 'at'))
