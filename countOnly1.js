const assertEqual = function(actual, expected) {
    console.assert(actual === expected, `${actual} !== ${expected}\u{1F614}`);

    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}\u{1F60A}`);


    }

  };
const countOnly = function(arr, obj){
    let result = {};
    for(let i =0;i < arr.length; i++){
        if(obj[arr[i]]){
            if(result[arr[i]]){
                result[arr[i]]++;
      } else {
        result[arr[i]] = 1;
            }
        }

    }
    return result;
}
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  //console.log(result1);
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
