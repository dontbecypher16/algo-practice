// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

 

// Example 1:

// Input: nums = [3,1,2,4]  14 16 4 2 19 9 11
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:

// Input: nums = [0]
// Output: [0]


/**
 * Input: array of nums
 * Output: array of nums
 * 
 * Declare empty array
 * Iterate over the array 
 * 
 * 1 3 2 5 7 11
 * 
 */


function parity(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length) {
    if (arr[j] % 2 === 0 && arr[i] % 2 === 1) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
      i++;
    }
    
  }

  return arr;
}

console.log(parity([3,1,2,4]))