/**
 * Selection notes
 * Swapping values when hitting the end of array with smallest value swap with value at beginning of array.
 * 
 * 
 * 
 * 
 */



function selection_sort(arr) {
  for (let j = 0; j < arr.length; j++) {
    let min = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[min]) {
        min = i
      }
    }
    let temp = arr[j]
    arr[j] = arr[min]
    arr[min] = temp
  }

  return arr;
}

console.log(selection_sort([30, 23, 4, 42, 12, 7, 6, 13]))