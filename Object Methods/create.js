/*
Object.create(proto)
Object.create(proto, propertiesObject)

It will return new Object with specified properties.
*/


const person = {
    printIntroduction: function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}

const me = Object.create(person, {
    foo: {
        writable: false,
        configurable: true,
        value: "hello",
  },
})

me.name = 'Dhruv Parmar';
me.age = 22

me.foo = 'Object.create() demo' // it will not overwrite the value because it is read-only.


me.printIntroduction()
console.log(me, person) // {name: 'Dhruv Parmar', age: 22, foo: 'hello'}, person will be available inside the me's prototype
