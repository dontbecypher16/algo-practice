// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
// Example 4:

// Input: n = 2, pick = 2
// Output: 2


var guessNumber = function(n) {
    let [l, h] = [1, n]

  

    while( l <= h){
        let mid = Math.floor(l + (h - l) / 2)
        let result = guess(mid)
        if(result === -1){
            h = mid-1
        } if(result === 1){
            l = mid+1
        } if(result === 0){
            return mid
        }
    }

    return mid
    
};



// Input: n = 10, pick = 6
// Output: 6

  // let arr = []
    // let start = arr[0]
    // let n = arr.length - 1
    // let mid = Math.round((start + n) / 2)
    // let guess = arr[num]



    