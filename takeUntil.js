const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("Arrays are equal.");

  } else {
    console.log("Arrays are not equal.");
  }

};
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
const takeUntil = function(array1, callback) {
  const arr = [];


  for (let item of array1) {
    if (callback(item)) {
      break;
    }
    arr.push(item);
  }
  return arr;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log('---');
//assertArrayEqual(results1,results2);
assertArrayEqual((results1), [ 1, 2, 5, 7, 2 ]);
assertArrayEqual((results2), [ "I've", 'been', 'to', 'Hollywood' ]);