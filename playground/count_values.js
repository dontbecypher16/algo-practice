//Multiple pointers problem
//Count unique values
/**
 * Implement a function called countUniqueValues, which accepts a 
 * sorted array and counts the unique values in the array. There
 * can be negative numbers in array but will always be sorted.
 * 
 * countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
 * countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2, -1, -1, 0, 1]) // 4
 * 
 */



function countUniqueValues(arr){
    if(arr.length === 0){
        return 0
    }

    let i = 0
    let j = 1
    let end = arr.length - 1
    let counter = 1

    while(i, j <= end){
        if(arr[i] !== arr[j]){
            counter++
        }
        i++
        j++
        
    }

    return counter


}

let array = [-2, -1, -1, 0, 1]

console.log(countUniqueValues(array))


/**
 * Input: array of numbers
 * Output: integer of unique values
 * 
 * Declare pointers to compare
 * Declare a counter as well
 * If array[i] === array[j] increment counter
 * 
 */