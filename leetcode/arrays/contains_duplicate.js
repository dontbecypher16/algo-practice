// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


var containsDuplicate = function(nums) {

    const set = new Set()
    
    for (var i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        } else {
            set.add(nums[i])
        }
    }
    return false

}

var input = [1,2,3,1]
console.log(containsDuplicate(input))

/**
 * 
 * 
 * 
 */