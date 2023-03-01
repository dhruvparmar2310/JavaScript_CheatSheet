//example-1
let x = 10;
let x = 50;

console.log('x :>> ', x); // SyntaxError: Identifier 'x' has already been declared


//example-2
let x = 10;
x = 50;

console.log('x :>> ', x); // 50

//example-3
let x = 10;
{
  let x = 50;
  console.log('inside block: x =', x); // 50
}
console.log('outside block: x =', x); // 10


//example-4
x = 10;
let x;

console.log(x); //Refernce Error: cannot access x before initialization


// example-5
let x = 10;
let x = 50;

console.log(x); // SyntaxError: Identifier 'x' has already been declared

//example-6 : A let or const variable is said to be in a "temporal dead zone" (TDZ)
console.log(x); // Reference Error
let x = 10;


//example-7 : Similar with const. But if we declare x with 'var', there will not be any error.
var x = 10;

let x = 'Dhruv' // Syntax error: x is already defined. 
