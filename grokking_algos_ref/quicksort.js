/*
* Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
* For more information see here: https://en.wikipedia.org/wiki/Quicksort
*/

/*
*  Doctests
*
*  > quickSort([5, 4, 3, 10, 2, 1])
*  [1, 2, 3, 4, 5, 10]
*  > quickSort([])
*  []
* > quickSort([5, 4])
*  [4, 5]
*  > quickSort([1, 2, 3])
*  [1, 2, 3]
*/

// function quickSort(items) {
//   const length = items.length;

//   if (length <= 1) {
//     return items;
//   }
//   const PIVOT = items[0];
//   const GREATER = [];
//   const LESSER = [];

//   for (let i = 1; i < length; i++) {
//     if (items[i] > PIVOT) {
//       GREATER.push(items[i]);
//     } else {
//       LESSER.push(items[i]);
//     }
//   }

//   let sorted = quickSort(LESSER);
//   sorted.push(PIVOT);
//   sorted = sorted.concat(quickSort(GREATER));

//   return sorted;
// }





var sortArray = function(nums) {
    
  
  if(nums.length <= 1){
      return nums
  }
  
  const pivot = nums[0]
 const  less =[]
  const greater =[]
  
  for(var i = 1; i < nums.length; i++){
      if(nums[i] > pivot){
          greater.push(nums[i])
      }else{
          less.push(nums[i])
      }
  }
  
  let sorted = sortArray(less);
sorted.push(pivot);
let newSorted = sorted.concat(sortArray(greater));

return newSorted;
  
};

// Implementation of quick sort

let ar = [5, 2, 3, 1];
// Array before Sort
console.log(ar);
ar = sortArray(ar);
// Array after sort
console.log(ar);