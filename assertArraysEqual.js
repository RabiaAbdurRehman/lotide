const eqArrays = require('./eqArrays');
const assertArrayEqual = function(actual, expected) {
    if(eqArrays(actual, expected)){
        console.log("Arrays are equal.");

    } else{
        console.log("Arrays are not equal.");
    }

};
module.exports = assertArrayEqual;


