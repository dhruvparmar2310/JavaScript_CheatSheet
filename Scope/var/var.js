var carName = 'Mustang'

console.log(carName) // Mustang

//declaring var inside the function scope.
function getCarCompany () {
  var carCompany = 'Ford'
}

console.log(carCompany) // throws an error of: carCompany is not defined 
// As we know 'var' is global scope but it cannot be accessed outside the function scope, if it is assigned inside the function. 

//without declaring var, it will take globally by default
carColor = 'Red'
console.log(carColor) // Red
