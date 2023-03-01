const employee = {
    name: 'abc'
}

console.log(Object.preventExtensions(employee))
employee.age = 25
employee.name = 'xyz'
/*
Object.defineProperties(employee, {
    college: {
        value: 'abc college',
        writable: true,
        configurable: true
    }
})
*/
