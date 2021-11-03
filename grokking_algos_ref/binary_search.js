// Eliminate half the numbers every time with binary search. (Only works in a sorted order)
// Worst case binary will take logn2 steps to run, simple search will take n steps.


// logarithms: 
// log10 100 is like asking, “How many 10s do we multiply 
//together to get 100?” The answer is 2: 10 × 10. So log10 100 = 2. Logs are the flip of exponentials

let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
 let words = text.split('\n')





/*let x = words


let low = words[0]  
let high = words[words.length - 1]

while(low <= high){
    let midpoint = Math.floor(low + (high - low) / 2)
    let guess = words[midpoint]

    
    if(guess < words[i]){
        low = midpoint + 1
        arr.push(words[i])
    }
}


console.log(arr)*/

function binarySearchIterative (arr, x, low = 0, high = arr.length - 1) {
    while (high >= low) {
      const mid = Math.floor(low + (high - low) / 2)
  
      if (arr[mid] === x) {
        // item found => return its index
        return mid
      }
  
      if (x < arr[mid]) {
        // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
        high = mid - 1
      } else {
        // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
        low = mid + 1
      }
    }
    // if low > high => we have searched the whole array without finding the item
    return -1
  }

  

  console.log(binarySearchIterative(words, 'LINEN'))









