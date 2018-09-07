// The forEach() Method
/**
 * forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.
 * forEach() loops through the array and executes the callback function for each element. During each execution, the current element is passed as an argument to the callback function.
The return value for .forEach() will always be undefined.
*Another way to pass a callback for .forEach() is to use arrow function syntax.
 */

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
// fruits.forEach(function(fruitItem)
// {
//   console.log('I want to eat a' + fruitItem);
// });

// using arrow function syntax
fruits.forEach(fruitItem =>
    console.log('I want to eat a ' + fruitItem));

// The .map() Method
const numbers = [1, 2, 3, 4, 5]; 

const bignumbers = numbers.map(number => {
  return number * 10;
});
console.log(numbers);
console.log(bignumbers);
