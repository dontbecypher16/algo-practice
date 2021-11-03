// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// Quicksort is a divide and conquer algorithm.
// Quicksort first divides a large array into two smaller
// sub-arrays: the low elements and the high elements.
// Quicksort can then recursively sort the sub-arrays

// The steps are:

// 1. Pick an element, called a pivot, from the array.
// 2. Partitioning: reorder the array so that all elements with
// values less than the pivot come before the pivot, while all
// elements with values greater than the pivot come after it
// (equal values can go either way). After this partitioning,
// the pivot is in its final position. This is called the
// partition operation.
// 3. Recursively apply the above steps to the sub-array of
// elements with smaller values and separately to the
// sub-array of elements with greater values.


var search = function(nums, target) {
    
    
};




const nums = [4,5,6,7,0,1,2]
console.assert(search(nums, 0) === 4, 'failed test 1')










//  Input: target = 0
// // Output: 4