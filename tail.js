const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let arrayNew = " ";
  arrayNew = arr.slice(1);

  return arrayNew;

};
// const arr = ["Yo Yo", "Lighthouse", "Labs"];
// const words = [];
// const news = [1];
// const num = [1, 2, 3, 4];
// console.log(tail(arr)); // no need to capture the return value since we are not checking it
// tail(words);
// tail(news);
// tail(num);
// assertEqual(tail(arr).length, 2);
// assertEqual(arr.length, 3); // original array should still have 3 elements!
// assertEqual(words.length, 0);
// assertEqual(news.length, 0);
// assertEqual(num.length, 3);
module.exports = tail;