/*
Sorting: 
It will return the original array in modified form. If you want a new array like map() you can do this by using [...array] spread opration.

const arr = [1, 11, 20, 2]
const sortArr = [...arr].sort()
*/

const fruits = ['Mango', 'mango', 'Apple', 'Apricot', 'Strawberry', 'Orange', 'Guava', 'Green Apple', 'Grapes', 'Kokoneos', 'Kiwi', 'Banana']
const rollNo = [101, 521, 111, 235, 982, 50, 80, -10, -15]
const enrolllNo = ['101', '521', '111', '235', '982', '50', '80', '-10', '-15']

const arr = [10, 45, 852, 200, , '', 110, undefined, [], {}, 201, 210]
const brr = [10, 45, [1, 0], {'name': 'Dhruv', 'age': 22}]
const crr = [10, 45, [2], {'name': 'Dhruv', 'age': 22}]
const drr = [10, 
             [
                 {'id': 2}, 
                 {'id': 1}
             ], 
             5]
const studentData = [
    {
        'name': 'Dhruv',
        'age': 22
    },
    {
        'name': 'Dhruv',
        'age': 20
    },
        {
        'name': 'akhil_patel',
        'age': 22
    },
      {
        'name': 'Akash_P',
        'age': 20
    },
    {
        'name': 'Er. Sagar',
        'age': 28
    },
    {
        'name': 'Pranav',
        'age': 18
    },
    {
        'name': 'Dr. Darshan',
        'age': 25
    },
    {
        'name': 'Hitika',
        'age': 21
    }
]

function compare (firstItem, secondItem) {
    return firstItem - secondItem;
}

function joinArray (arr) {
    return arr.join(', ')
}


console.log(fruits.sort())
console.log('Simple Integers sort :>> ', rollNo.sort())
console.log(enrolllNo.sort())

console.log(arr.sort())
console.log(brr.sort())
console.log(crr.sort())
console.log(drr.sort())

console.log('Compare Integers :>> ', rollNo.sort(compare))

/* --- */
console.log('Compare String Numbers');
console.log('Step - 1 :>> ', joinArray(enrolllNo))

/*
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
*/


/* Sorting by integer and string */
//console.log('Sorting studentData by age in Ascending Order :>> ', studentData.sort((a, b) => a.age - b.age))
console.log('Sorting studentData by name in Ascending Order :>> ', studentData.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    if (a.name === b.name) {
        if (a.age < b.age) {
            return -1;
        }
        if (a.age > b.age) {
            return 1;
        }
        return 0;
    }
    return 0;
}))
//console.log('Sorting studentData by age in Descending Order :>> ', studentData.sort((a, b) => b.age - a.age))


/* localeCompare buitin sort method of string */
console.log(fruits.sort((a, b) => a.localeCompare(b)))
