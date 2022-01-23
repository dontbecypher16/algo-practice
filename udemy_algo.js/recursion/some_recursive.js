/**
 * Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 * 
 * Input: array, callback function
 * Output: boolean value
 * 
 * If arr[i] equals to callback return true
 * someRecursive([1, 2, 3, 4], isOdd))
 * 
 * 
 */

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  if (array.length === 0) {
    return false;
  } else if (callback(array[0]) === true) {
    return true;
  }

  return someRecursive(array.slice(1), callback);
}


console.log(someRecursive([4, 6, 8], isOdd))