/*FILTER*/

function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

/*1*/

// let result = filter([1, 2, 3, 4, 15], function (val) {
//   return val < 10;
// }); //this filters each value in the array and only allows values that are less than 10

// console.log(result); //this should log [1,2,3,4]

// /*2*/

let result = filter([1, 2, 3, 4, 15], function (val) {
  return val < 3;
}); //only allows values that is less than 3

console.log(result); //this should log [1,2]
