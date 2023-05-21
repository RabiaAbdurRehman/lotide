const assertArrayEqual = function(actual, expected) {
    if(eqArrays(actual, expected)){
        console.log("Arrays are equal.");

    } else{
        console.log("Arrays are not equal.");
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
assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]);