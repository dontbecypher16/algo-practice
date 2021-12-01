// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]


var relativeSortArray = function(arr1, arr2) {

    let result = []
    let sortedArr1 = arr1.sort(function(a, b){
        return a - b
    })
    console.log(sortedArr1)

    for(let i = 0; i < arr2.length; i++){
        let target = arr2[i]
        let j = 0
        
        while(j < sortedArr1.length){
            let value = sortedArr1[j]
            if(target === value){
              let copy = sortedArr1.splice(j, 1)
              result = result.concat(copy)


            }
            else{
                j++
        
            }
            
        }


    }

    return result.concat(sortedArr1)
    
}

let testData1 = [2,3,1,3,2,4,6,7,9,2,19]
let testData2 = [2,1,4,3,9,6]
console.log(relativeSortArray(testData1, testData2))


/**
 * elements not in arr2 but in arr1 are 
 * for the output, arr2 elements are not sorted and stays together unless element has duplicate in arr1
 * sort the arr1
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */