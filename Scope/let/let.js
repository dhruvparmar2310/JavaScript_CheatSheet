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
