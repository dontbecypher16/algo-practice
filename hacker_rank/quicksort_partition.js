// Step 1: Divide
// Choose some pivot element, , and partition your unsorted array, , into three smaller arrays: , , and , where each element in , each element in , and each element in .

// Example

// In this challenge, the pivot will always be at , so the pivot is .

//  is divided into , , and .
// Putting them all together, you get . There is a flexible checker that allows the elements of  and  to be in any order. For example,  is valid as well.

// Given  and , partition  into , , and  using the Divide instructions above. Return a 1-dimensional array containing each element in  first, followed by each element in , followed by each element in .

// Function Description

// Complete the quickSort function in the editor below.

// quickSort has the following parameter(s):

// int arr[n]:  is the pivot element
// Returns

// int[n]: an array of integers as described above
// Input Format

// The first line contains , the size of .
// The second line contains  space-separated integers  (the unsorted array). The first integer, , is the pivot element, .

// Constraints

//  where 
// All elements are distinct.
// Sample Input

// STDIN       Function
// -----       --------
// 5           arr[] size n =5
// 4 5 3 7 2   arr =[4, 5, 3, 7, 2]
// Sample Output

// 3 2 4 5 7


function quickSort(arr) {
    let n = arr.length

    if(n < 2){
        return arr
    }

    let pivot = arr[0]
    let greater = []
    let less = []

for(let i = 1; i < n; i++){

        if(arr[i] < pivot){
            less.push(arr[i])
        }else{
            greater.push(arr[i])
        }
    }
    // recursive result, have to have base case above to work
    const result = quickSort(less).concat(pivot, quickSort(greater))
    return result

    //iterative result
   // return less.concat(pivot, greater)


}

let array = [4, 5, 3, 7, 2]

console.log(quickSort(array))