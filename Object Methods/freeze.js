/*
It will freeze the object. We cannot remove or edit the object. It cannot be writable, configurable, enumerable. We cannot re-assign any element.

It will return the same object without any change. In short it will control the defineProperty() propertites.

Syntax:
Object.freeze(obj)
*/

const car = {
    name: 'Galado',
    company: 'Lamborgini',
    color: 'Yellow',
    price: '3.5 Cr.',
    variant: {}
}


car.city = 'Mumbai' // it will be edited before the frozon
console.log('isFrozen (Before Freezing) : ', Object.isFrozen(car))

Object.freeze(car)

/*
To make nested object frozen, we need to do deepFrozen()

What is Reflect ?
Reflect is not a contructor. Reflect is built-in object property.
*/

function deepFreeze(object) {
  // Retrieve the property names defined on object
  const propNames = Reflect.ownKeys(object);
  console.log('propNames : ',propNames)

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = object[name];
    console.log('value : ', value)

    if ((value && typeof value === "object") || typeof value === "function") {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

deepFreeze(car)
car.variant.a = 'Petrol' //now after deepFreeze we will not be able to alter the nested object.

car.name = 'Hurracan' // it can't be edited after the frozen
/*
Object.defineProperty(car, 'variant', {
    value: 'Petrol',
    writable: true,
    configurable: true,
    enumerable: true
}) // typeError: cannot define property variant, object is not extensible
*/

console.log(car)
console.log('isFrozen (After Freezing) : ', Object.isFrozen(car))


