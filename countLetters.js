const assertEqual = function(actual, expected) {
    console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


    }

  };
  function countLetters(str){
    const count = {};
   for(const item of str) {
    if(item === " "){
        continue;
    }


            if(count[item]){
            count[item]++;
            }

        else{
            count[item] = 1;
        }
    }
    return count;

  };
  const result1 = countLetters("lighthouse in the house")
  console.log(result1);

  assertEqual(result1["h"] ,4);

