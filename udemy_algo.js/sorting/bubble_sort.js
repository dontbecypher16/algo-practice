/**
 * Bubble sort notes
 * Swapping pairs with largest value in sorted position.
 * Remember this pattern because this will be used a lot with regards to swapping.
 * Also the boolean flag is to short circuit the loop if there is no more swaps. Can keep
 * iterating when all swaps are done.
 * 
 */

 function swap(arr){

    for(let j = arr.length; j > 0; j--){
        let noSwaps = true
        for(let i = 0; i < j - 1; i++){
            if(arr[i] > arr[i+1]){
                   let temp = arr[i]
                   arr[i] = arr[i+1]
                   arr[i+1] = temp
                   noSwaps = false
               }

           }
           if(noSwaps)  break
       }
   

   return arr

}

//  function swap(arr){

//      for(let j = 0; j < arr.length; j++){
//          for(let i = 0; i < arr.length; i++){
//              if(arr[i] > arr[i+1]){
//                     let temp = arr[i]
//                     arr[i] = arr[i+1]
//                     arr[i+1] = temp
//                 }

//             }
//         }
    

//     return arr;

// }


console.log(swap([30, 23, 4, 42, 12, 7, 6, 13]))