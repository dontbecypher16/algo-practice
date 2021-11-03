// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

 

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

//iterate over array of nums and duplicate 0's
//set condition on if 0 duplicate it


let duplicateZeros = function(arr) {

    for(let i = 0; i < arr.length; i++){
        let zero = arr[i] === 0
        if(zero){
            arr.pop()
            arr.splice(i, 0, 0)
            i++ 
        }
        
    }
    return arr

    
};


let test = [0, 2, 0, 5, 0, 4, 6]
console.log(duplicateZeros(test))
