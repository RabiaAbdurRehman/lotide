const assertArrayEqual = function(actual, expected) {
  if ((eqArrays(actual, expected))) {
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
const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["gum", "car", "tom", "mommy", "tan"];
const s = "hello";
const map = function(array1, callback) {
  const results = [];
  if (Array.isArray(array1)) {
    for (let item of array1) {
      results.push(callback(item));
    }
    return results;
  } else {
    const words = array1.split(" ");
    words.push(callback(words));
    return words;
  }
};
const result1 = map(words, word => word[0]);
const result2 = map(words1, word => word[0]);
const result3 = map(s, letters => letters + letters);
const result4 = map(words, word => word[word.length - 1]);
assertArrayEqual(result1, result2);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

