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

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join('')); // HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100 ;
});

console.log(smallNumbers); // [1,2,3,4,5]

// The .filter() Method
/*Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements cause the callback function to return true are added to the new array. */

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});
console.log(smallNumbers); 

// The .findIndex() Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});
console.log(foundAnimal); // 7

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal[0] === 's';
});

console.log(foundAnimal);// 3

// The .reduce() Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
});
console.log(newSum);