


const assertArrayEqual = function(actual, expected) {
    if(eqArrays(actual, expected)){
        console.log(expected);

    } else{
        console.log(expected);
    }

};
    const eqArrays = function(arr1 , arr2){
        if (arr1.length !== arr2.length) {
            return false;
        }
        for(let i = 0; i<arr1.length; i++){


                if(arr1[i] !== arr2[i]){
                   return false;
 }

}
        return true;
};
function flatten(arr) {
  let flatArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray = flatArray.concat(flatten(arr[i]));
    } else {
      flatArray.push(arr[i]);
    }
  }

  return flatArray;
}

//let arr;
//let flattenedArr = flatten(arr);
//console.log(flattenedArr); // [1, 2, 3, 4, 5]
assertArrayEqual(flatten([1, [2, [3, 4], 5]]), [1, 2, 3, 4, 5]);
