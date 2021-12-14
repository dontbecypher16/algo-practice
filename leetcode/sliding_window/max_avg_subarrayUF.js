// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


function findMaxAverage(nums, k){
 
   let start = 0
   let end = start + k

   let reducer = (prev, curr) => prev + curr
   
    let result
    let maxValue = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < nums.length; i++){
        if(nums.length === 1){
            result = nums[i]
            return result
        }
        let window = nums.slice(start, end)
        let sumValue = window.reduce(reducer)
         if(window.length === k){
            let avgValue = sumValue / k
            if(avgValue > maxValue){
                maxValue = avgValue
            }
            start++
            end++

        }


    }
    
    return maxValue

}


let testNums = [1,12,-5,-6,50,3]
let p = 4

console.log(findMaxAverage(testNums, p))


/**
 * 
 * Input: integer array and integer var
 * Output: return integer type 
 * Assumptions: max avg value of subarray length that is equal to integer var
 * 
 * set up base case of n == nums.length
 * use slice method for window
 * parameters: first one will be [0], second one will be k
 * set up condition and handle math logic and then push max value into array
 * 
 * Find the max value in array and return that
 * 
 * 
 */

 //return maxStorage.reduce((max, curr) => curr > max ? curr : max)


 ///// **Study this for sliding window and two-pointer 
//  var findMaxAverage = function (nums, k) {
//     if (nums.length <= 0 || k > nums.length) return;
//     const n = nums.length;
//     let i = 0;
//     let j = 0;
//     let max = -Infinity;
//     let avg = -Infinity;
//     let sum = 0;

//     while (j < n) {
//            const ws = j - i + 1;
//            sum += nums[j];
//            if (ws < k) {
//                   j++;
//            } else if (ws === k) {
//                   avg = sum / k;
//                   max = Math.max(avg, max);
//                   sum -= nums[i];
//                   i++;
//                   j++;
//            }
//     }
//     return max;
// };


//////////////////////////////

// var findMaxAverage = function(nums, k) {
//     let sum = 0;
//     for (let i = 0; i < k; i++) {
//       sum += nums[i];
//     }
    
//     let max = sum;
//     for (let i = k; i < nums.length; i++) {
//       sum = sum - nums[i - k] + nums[i];
//       max = Math.max(max, sum);
//     }
    
//     return max / k;
//   };