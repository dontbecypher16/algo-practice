// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


/**
 * 
 * Get the length of x
 * Is length even or odd
 * 
 * 
 * 1 2 6 7
 * 1 1 2 2
 * 1 2 2 1
 * 1 1 2 2 1
 * 1 2 2 2 1
 * 1 1 2 1 1
 * 
 * 1 2 2 1 1 2 2 1
 */

function palindrome(x){

    let arr = x.toString()
    let arr2 = arr.split('')
    let backwards = arr2.slice().reverse()


    for(let i = 0; i < arr2.length; i++){
        if(arr2[i] !== backwards[i]){
            return false
        }
    }

    return true

}


let n = 12211221
console.log(palindrome(n))

