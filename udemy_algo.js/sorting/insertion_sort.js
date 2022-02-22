/**
 * Insertion sort notes
 * 
 * Build up the sort by gradually creating a larger left half which is always sorted.
 * Start at second element in array  
 * Compare second element with one before and if it is incorrect order,
 * iterate through sorted portion until in correct place.
 * Repeat until array is sorted
 * 
 */


function insertion_sort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i]
        for(let j = i-1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
            arr[j] = currentVal
        }
    }

    return arr

}

console.log(insertion_sort([30, 23, 4, 42, 12, 7, 6, 13]))