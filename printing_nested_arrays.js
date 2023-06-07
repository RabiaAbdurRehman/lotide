const printItems = function(array1) {
    array1.forEach(element => {
        if(Array.isArray(element)){
            printItems(element);

        } else {
            console.log(element);
        }

    });
}

  const array = ["A", "B", "C", "D", "E"];
  const array1 = ["A", ["B", "C"], "D", "E"];
  const array2 = ["A", [["B", ["C"]], [[["D"]], "E"]]];
  printItems(array);
  printItems(array1);
  printItems(array2);
  /*
  recursive case: when elements are an array.
  base case: when elements are not.
  */



