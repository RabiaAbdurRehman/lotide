// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 3, 4, 5, 6];
// console.log("The middle elements of the array is/are: ", middle(arr1));
// console.log("The middle elements of the array is/are: ", middle(arr2));

// assertArraysEqual(middle(arr1), [3]); // case 1
// assertArraysEqual(middle(arr2), [3, 4]);  //case 2, => [3, 4]
const assert = require('chai').assert;
const middle = require('../middle');
describe("#head", () => {
    it('return "[3]" for "[1, 2, 3, 4]"', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    });
    it('return "[3, 4]" for "[1, 2, 3, 4, 5, 6]"', () => {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });

})