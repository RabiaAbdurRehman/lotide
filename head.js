const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


  }

};
const head = function(array) {
  let firstElement = array[0];
  return firstElement;

};

assertEqual(1,1);
assertEqual('Lighthouse', 'Bootcamp');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");