
/**
 * Merge Sort
 * 
 * Now the sorting aspect after learning merging concept comes to play.
 * Will have to use recursion to implement sorting.
 * 
 *  
 *
 */


function merge_sort(arr1, arr2){

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
 

    return result.sort(function(a, b) {return a - b})
   


}


console.log(merge_sort([1, 50, 10], [2, 99, 14, 100]))