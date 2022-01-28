// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

/**
 * Input: objects 
 * output: number
 * 
 * for in loop, typeof
 * If value equals to number and also even
 * push to array, if value is an object // recursion needs to happen here 
 * what is the value of the object 
 * 
 * 
 * 
 */

function nestedEvenSum(obj1, sum=0) {
  for (var key in obj1) {
    if (typeof obj1[key] === "object") {
      sum += nestedEvenSum(obj1[key]);
    } else if (typeof obj1[key] === "number" && obj1[key] % 2 === 0) {
      sum += obj1[key];
    }
  }
  return sum;
}
  
  
  var obj2 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj3 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bbb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  //nestedEvenSum(obj2); // 6
  //nestedEvenSum(obj3); // 10

  console.log(nestedEvenSum(obj3))


//   for (var key in obj) {
//     if (typeof obj[key] === 'object'){
//         sum += nestedEvenSum(obj[key]);
//     } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//         sum += obj[key];
//     }
// }
// return sum;