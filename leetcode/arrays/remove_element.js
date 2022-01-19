// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }


// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * 
 * Input: number array and target value
 * Output: k number value and number array
 * 
 * Return k after placing the final result in the first k slots of nums
 * Have to modify array in place, no extra space
 * Use splice() to modify in place, replace with empty placeholder
 * Then sort the array with underscores after k values
 * Return k and array
 */

function remove_Element(nums, val) {
  let placeholder = "";
  let k = 0;

  for (let i = 0; i < nums.length; i++){
    let check = nums[i]
    if(check === val){
      nums.splice(i, 1)
    }else{
      k++
    }
  }

  for(let j = 0; j < nums.length; j++){
    if(nums[j] !== placeholder){
      nums.sort()
    }
  }

  let result = nums.reverse()

  return [ k, result ]

  
}

let arr = [3, 2, 2, 3]
let target = 3
console.log(remove_Element(arr, target))