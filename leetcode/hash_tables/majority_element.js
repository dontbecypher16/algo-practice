

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:
// Input: nums = [3,2,3]
// Output: 3


// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

/**
 * Input: array of nums
 * Output: value that appears the most
 * 
 * Declare a lookup object
 * If 
 * 
 * 
 *  
 */

function majorityElement(nums){
    let lookup = {}

    for(let num of nums){
        if(lookup[num]){
            lookup[num] += 1 
        }else{
            lookup[num] = 1
        }
    }

    // lookup = {1:3, 2:4}
    let temp 
    for(let key in lookup){
        if(temp === undefined){
            temp = key
        }else{
            if(lookup[key] > lookup[temp]){
                temp = key
            }
        }
        
        
    }

    return temp

}

let int = [2,2,1,1,1,2,2]

console.log(majorityElement(int))