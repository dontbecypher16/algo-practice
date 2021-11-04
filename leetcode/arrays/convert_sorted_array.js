// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.


/*
Input: Sorted array of numbers
Output: binary search tree of same array

*/ 

function convertSortedArray(arr){
    let result = []
    let mid = Math.floor(arr.length/2)
    return mid
}
//let arrayTest = [2, 5, 8, 9, 11, 24, 32, 43, 47]
let arrayTest = [2, 5, 8, 9]

console.log(convertSortedArray(arrayTest))