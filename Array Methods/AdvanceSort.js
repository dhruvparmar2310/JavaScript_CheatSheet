/*
Sort in such as way that:

a: Increasing Order
b: Decreasing Order
c: Increasing Order
*/

/*
hint
*/

const customSort = [
    { a: 20, b: 10, c: 30 },
    { a: 20, b: 11, c: 50 },
    { a: 20, b: 11, c: 40 },
    { a: 10, b: 10, c: 70 },
    { a: 10, b: 10, c: 50 },
    { a: 10, b: 10, c: 30 },
    { a: 40, b: 101, c: 80 },
    { a: 40, b: 120, c: 90 },
    { a: 40, b: 130, c: 40 },
    { a: 40, b: 130, c: 60 },
    { a: 40, b: 130, c: 20 },
    { a: 5, b: 10, c: 35 },
    { a: 7, b: 10, c: 37 }
]

/* output :
    [
        { a: 5, b: 10, c: 35 },
        { a: 7, b: 10, c: 37 },
        { a: 10, b: 10, c: 30 },
        { a: 10, b: 10, c: 50 },
        { a: 10, b: 10, c: 70 },
        { a: 20, b: 11, c: 40 },
        { a: 20, b: 11, c: 50 },
        { a: 20, b: 10, c: 30 },
        { a: 40, b: 130, c: 20 },
        { a: 40, b: 120, c: 90 },
        { a: 40, b: 101, c: 80 },
    ]
*/

console.log(customSort.sort((next, current) => {
    if (next.a < current.a) {
        return -1;
    }
    if(next.a === current.a){
        if (next.b === current.b) {
            return -1;
        }
        return -1;
    }
    if (next.c > current.c) {
        return 1;
    }
    return 0;
}))

