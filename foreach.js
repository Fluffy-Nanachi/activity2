// FREDERICK MARIUS LONTOC

//FOREACH

function foreach(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

// 1

let result = foreach([1, 2, 3, 4, 5], function (num) {
  return num * 2;
});

console.log(result); //this should log [2,4,6,8,10]

//2

result = foreach([1, 2, 3, "v88", "training"], function (val) {
  if (typeof val === "number") {
    return 0;
  } else {
    return val;
  }
});

console.log(result); //this should log [0,0,0,"v88","training"];

//3

result = foreach([1, 2, 3, "hello"], function (val) {
  return typeof val;
});

console.log(result); //this should log ["number", "number", "number", "string"];
