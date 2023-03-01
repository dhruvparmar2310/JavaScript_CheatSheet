//example-1
var carName = 'Mustang'

console.log(carName) // Mustang

//example-2 : declaring var inside the function scope.
function getCarCompany () {
  var carCompany = 'Ford'
}

console.log(carCompany) // throws an error of: carCompany is not defined 
// As we know 'var' is global scope but it cannot be accessed outside the function scope, if it is assigned inside the function. 

//example-3 : without declaring var, it will take globally by default
carColor = 'Red'
console.log(carColor) // Red

//example-4
x = 10;
var x;

console.log(x);

//example-5
{
  var x = 10;
  console.log('inside block: x = ', x); // 10
}

x = 50;
console.log('outside block: x = ', x); // 50


//example-6
var x = 10;
var x = 'Dhruv'

console.log(x); // Dhruv, no error


//example-7
{
    console.log(x); // undefined
    var x = 10;
}
