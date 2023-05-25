const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


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

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  //const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  //const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  for (let key in object1) {
    const typeOfValue = typeof object1[key]; //good strategy to find type.
    console.log("type of value ", typeOfValue);
    if (typeOfValue === "object") {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

  }

  return true;
};






// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };
// console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
// eqObjects(shirtObject , anotherShirtObject); // => true//We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
//console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
//console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);