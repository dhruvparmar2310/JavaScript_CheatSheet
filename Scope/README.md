# Scopes in Javascript:

There are three types of scopes:
1) Global Scope
2) Function Scope and
3) Block Scope

Lets discuss it with the help of [var](./var/var.js), [let](./let/let.js) and [const](./const/const.js). A `let` or `const` variable is said to be in a "temporal dead zone" (TDZ).

## Function Scope:
Anything within the function cannot be accessed outside the function. One function can have many local scopes.
eg: 

```javascript
function doThis () {
  const x = 10;
}

console.log('x :>> ', x); // Reference Error: x is not defined.
```

## Global Scope:
Now, if I wanna access the `x` then I need to declare it outside the function as a globally. `var` is a global scope, but it becomes local scope when declared inside any function. It can work when declared between ({}: braces), but can't work in function.

If `var`, `let` and `const` are declared globally, then it can be accessed inside any function.

```javascript
const x = 10;

function doThis () {
  cionsole.log('x :>> ', x);
}

doThis()
```

## Block Scope:
The variable declared by the `let` and `const` are block scope. But `var` is not block scope.

```javascript
{
  var x = 10;
}

console.log('x :>> ', x); // 10
```


```javascript
{
  const x = 10;
}

console.log('x :>> ', x); // Reference error
```


```javascript
{
  let x = 10;
}

console.log('x :>> ', x); // Reference error
```
