const eqArrays = function(arr1 , arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("The middle element(s) of the array is/are: ", expected);

  } else {
    console.log("The middle element(s) of the array is/are not confirmed.");
  }

};


const middle = function(array) {
  let middle = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    return [array[middle - 1], array[middle]];
  } else {
    return [array[middle]];
  }

};



assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
