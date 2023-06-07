const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


  }

};
module.exports = assertEqual;
/*  how we are passing the variable assertEqual
(which points to our function) and not calling assertEqual via assertEqual() here.
This is an important distinction.*/
