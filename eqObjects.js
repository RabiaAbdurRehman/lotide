const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


  }

};

const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};



const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
eqObjects(shirtObject , anotherShirtObject); // => true//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);