const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let middle = Math.floor(array.length / 2); //case 1: 5/2 = 2.5, then math.floor(2.5) = 2, case 2: 6/2 = 3
  if (array.length % 2 === 0) {               // case 2
    return [array[middle - 1], array[middle]]; // case 2: array[2], array[3]
  } else {
    return [array[middle]];// case 1: array[2] = 3
  }

};
module.exports = middle;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
console.log("The middle elements of the array is/are: ", middle(arr1));
console.log("The middle elements of the array is/are: ", middle(arr2));

assertArraysEqual(middle(arr1), [3]); // case 1
assertArraysEqual(middle(arr2), [3, 4]);  //case 2, => [3, 4]
