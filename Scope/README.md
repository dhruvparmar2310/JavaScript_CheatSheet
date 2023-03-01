# Scopes in Javascript:

There are three types of scopes:
1) Global Scope
2) Function Scope and
3) Block Scope

Lets discuss it with the help of [var](./var/var.js), [let](./let/let.js) and const.

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
Now, if I wanna access the `x` then I need to declare it outside the function as a globally.

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
