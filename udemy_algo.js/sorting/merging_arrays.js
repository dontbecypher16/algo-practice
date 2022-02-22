/**
 * Merging arrays
 * 
 * First part of learning merge sort.
 * Will merge two arrays. Use two pointers and while loop.
 * 
 * Input: arrays
 * Output: array
 * 
 * When one of the pointers reach the end of array, push the rest of 
 * second array into it.
 * 
 */



function merging_intro(arr1, arr2){

    let result = []
    let i = 0
    let j = 0

    while(i < arr1.length  && j <arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
            
        }else{
            result.push(arr1[i])
            i++
        }


    }
    while(i < arr1.length){
            result.push(arr1[i])
            i++
            
        
    }
    while(j < arr2.length){
            result.push(arr2[j])
            j++
            
        
    }
 
   return result


}


console.log(merging_intro([1, 10, 50], [2, 14, 99, 100]))