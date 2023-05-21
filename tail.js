const assertEqual = function(actual, expected) {
    if(actual !== expected){
        console.log(`Assertion Passed: ${actual} === ${expected}\u{1F614}`);
    }

    else {
      console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


    }

  };
  const tail = function(arr){
    let arrayNew = " ";
    arrayNew = arr.slice(1);

       return arrayNew;

};

  //assertEqual(1,1);
  //assertEqual('Lighthouse', 'Bootcamp');
  // Test Case: Check the original array
const arr = ["Yo Yo", "Lighthouse", "Labs"];
const words = [];
const news = [1];
const num = [1 , 2 , 3, 4];
tail(arr); // no need to capture the return value since we are not checking it
tail(words);
tail(news);
tail(num);
assertEqual(arr.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 0);
assertEqual(news.length, 0);
assertEqual(num.length, 3);