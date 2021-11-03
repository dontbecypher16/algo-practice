// Sorting
// One common task for computers is to sort data. For example,
// people might want to see all their files on a computer sorted by size. 
//Since sorting is a simple problem with many different possible solutions, it is often used to introduce the study of algorithms.

// Insertion Sort
// These challenges will cover Insertion Sort, a simple and intuitive sorting algorithm.
// We will first start with a nearly sorted list.

// Insert element into sorted list
// Given a sorted list with an unsorted number  in the rightmost cell, 
//can you write some simple code to insert  into the array so that it remains sorted?

// Since this is a learning exercise, it won't be the most efficient way of performing the insertion.
// It will instead demonstrate the brute-force method in detail.

// Assume you are given the array  indexed . Store the value of . 
//Now test lower index values successively from  to  until you reach a value that is lower than ,
// at  in this case. Each time your test fails, copy the value at the lower index to the current index and print your array.
// When the next lower indexed value is smaller than , insert the stored value at the current index and print the entire array.

// Example


// Start at the rightmost index. Store the value of . Compare this to each element to the left until a smaller value is reached.
// Here are the results as described:

// 1 2 4 5 5
// 1 2 4 4 5
// 1 2 3 4 5
// Function Description

// Complete the insertionSort1 function in the editor below.

// insertionSort1 has the following parameter(s):

// n: an integer, the size of 
// arr: an array of integers to sort
// Returns

// None: Print the interim and final arrays, each on a new line. No return value is expected.
// Input Format

// The first line contains the integer , the size of the array .
// The next line contains  space-separated integers .

// Constraints



// Output Format

// Print the array as a row of space-separated integers each time there is a shift or insertion.


function insertionSort(n, arr) {
  for (let i = 0; i < n; i++) {
    let currentElement = arr[i];
    //last index of sorted array
    let lastIndex = i - 1;

    while (lastIndex > -1 && currentElement < arr[lastIndex]) {
      arr[lastIndex + 1] = arr[lastIndex];
      lastIndex--;
      console.log(arr.join(" "));
    }

    arr[lastIndex + 1] = currentElement
    if(lastIndex !== i - 1){
      console.log(arr.join(" "));
    }
  }

  console.log(arr)
}

let x = 5
//let array = [2, 4, 6, 8, 3]
let array = [1, 4, 3, 5, 6, 2]

insertionSort(x, array)