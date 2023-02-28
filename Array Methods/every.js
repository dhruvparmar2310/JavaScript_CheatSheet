/* it will return boolean. It will return true, if all the elements satisfy the condition. 
It will return 'false', if one of the element does not satisfy the condition.
It accepts a callback function/arrow function/inline function */

arr = [10, 25, 45, 15];

// it will add 'new' = arr.length times.
arr.every((elem, index, arr) => {
  arr.push("new");
    
  console.log('index :>> ',index)
  console.log(`[${arr}][${index}] -> ${elem}`);
    console.log('Length :>> ',arr.length)
  return elem < 50; //10, 15, 25, 45. It means it will iterate 4 times
});


console.log('Executing Array.every() for Deletion...')
arr.every((elem, index, arr) => {
  arr.pop();
  
  console.log(`[${arr}][${index}] -> ${elem}`);
  console.log('Element :>> ', elem);
  return elem < 30; //10, 15, 25. It means it will iterate 3 times.
});

