const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


  }
};
const findKeyByValue = (obj, str) => {
  for (let show in obj) {
    if (obj[show] === str) {
      return show;
    }
  }

};
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


