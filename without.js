
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
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
const without = function(source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
  moduleodule.exports= without;
  /*I used the filter() method to create a new array "newArray" that will
   contain all elements from the sourcearray that are not in the items to remove array
   The filter() method creates a new array by iterating over each element in the source array and applying a callback function to it. The callback function takes one argument (the current element) and returns a boolean value
   indicating whether or not the element should be included in the new array. In this case, we’re using the includes() method to check if the current element is in the items to remove array. If it is, we return false to exclude it from the new array.
   If it’s not, we return true to include it in the new array.*/
  //A callback function is a function that is
  //passed as an argument to another function and is executed inside that function.

};

// testing assertArraysEqual function with arrays
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, 2, 3, 4], [1, 2, 3]), [4]);
assertArraysEqual(without([1, 2, 3], [3, 2, 1]), []);
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);
assertArraysEqual(without(["1", "2", "3"], ["1", "2", 3]), []);

// testing assertArraysEqual function with strings
assertArraysEqual(without("hello world".split(), ["o"]), ["hell wrld"]);
assertArraysEqual(without("light house labs".split(), ["l", "o"]), ["ight huse abs"]);
assertArraysEqual(without("hello world".split(), ["h", "l"]), ["e", "o", " ", "w", "r", "d"]);