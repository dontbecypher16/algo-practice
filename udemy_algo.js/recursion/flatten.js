/**
 * Write a recursive function called flatten which accepts an array of arrays   and returns a new array with all values flattened.
 * 
 * Input: array of arrays
 * Output: single array
 * 
 * Declare array for storage
 * Base case: once at end of argument array, then return storage array
 * Recursive case: if value is number push to storage array, then slice.
 *  if array check next depth of first index 
 * 
 * 
 */

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

 function flatten(array){
     if(array.length === 0){
         return [];
     } 
     
     if (Array.isArray(array[0])) {
         return [...flatten(array[0]), ...flatten(array.slice(1))]
     }
    return [array[0], ...flatten(array.slice(1))]

}


  //console.log(flatten([1, [2, [3, 4], [[5]]]]))
//   console.log(flatArray([1, [2, [3, 4], [[5]]]]))

  function flatArray2(arr) {
      if (arr.length === 0) {
          return [];
      } else {
          const start = Array.isArray(arr[0]) ? flatArray2(arr[0]) : [arr[0]]
          
          return [...start, ...flatArray2(arr.slice(1))];
      }
  }

  
//   console.log(flatArray2([1, [2, [3, 4], [[5]]]]))


//   function flatten(arr) {
//     if(!Array.isArray(arr) || !arr.length) return [].concat(arr);
//     const [val, ...rest] = arr;
//     return [...flatten(val), ...flatten(rest)]

// }




function flattenNew([first, ...rest]) {
    if (!first) {
        return [];  
    }
    if (Array.isArray(first)) {
      return [...flattenNew(first), ...flattenNew(rest)];
    } else {
      return [first, ...flattenNew(rest)];
    }
  }

  console.log(flatten([1, [2, [3, 4], [[5]]]]))
  