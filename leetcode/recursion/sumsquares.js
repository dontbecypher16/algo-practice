// Write a function that sums squares of numbers in list that may contain more lists

// Sample:

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

// l = [10,[[10],10],[10]] 
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

/**
 * Input: array itself or number indicating array
 * Output: number
 * 
 * Base case: array is length of 1, return sum variable
 * Recursive case: iterate over array,
 *  when it is a number times that to itself and add
 *  to a sum variable
 * 
 */


function sumSquares(n){
    let sum = 0
    
    for(let i = 0; i < n.length; i++){
        if(typeof n[i] === 'number'){
            let timesResult = n[i] * n[i]
            sum += timesResult
        } else if(Array.isArray(n[i])){
          sum += sumSquares(n[i])
        }

    }


    return sum

}

console.log(sumSquares([10,[[10],10],[10]]))