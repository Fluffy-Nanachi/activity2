/*REJECT*/

function reject(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

/*1*/

let result = reject([1, 2, 3, 4, 15], function (val) {
  return val < 10;
}); //rejects any value that is less than 10

console.log(result); //this should log [15]

/*2*/

let result = reject([1, 2, 3, 4, 15], function (val) {
  return val < 3;
}); //rejects any value that is less than 3

console.log(result); //this should log [3,4,15]
