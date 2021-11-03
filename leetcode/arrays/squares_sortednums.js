// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].


//want to iterate and return square of each number


let sortedSquares = function(nums) {
    let result = []

    for(let i = 0; i < nums.length; i++){
        let multiplier = nums[i]
        let squared = nums[i] * multiplier
        result.push(squared)
        

    }

    return result.sort((a, b) => {
        return a - b
    })

    
}

let test = [-4,-1,0,3,10]
console.log(sortedSquares(test))

