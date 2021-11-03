// If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same.
//  If that is not the case, then it is also a missing number.
// Return the missing numbers sorted ascending.
// Only include a missing number once, even if it is missing multiple times.
// The difference between the maximum and minimum numbers in the original list is less than or equal to 100

// n the size of the first list, arr 
// The next line contains n space-separated integers arr[i] 
//  m the size of the second list, brr 
// The next line contains m space-separated integers brr[i]



// function missingNumbers(arr, brr) {
//     let result = []

//     while(Math.max((brr) - Math.min(brr)) <= 100){

//     }

// }

function compareTriplets(a, b) {
  let result = [];
  result[0] = 0;
  result[1] = 1;

  let i = 0;
  let j = 0;

   while (i <= 3) {
       let found = true
     while (j <= 3) {
       if (a[i] > b[j]) {
         result[0] += 1;
         } else if (a[i] < b[j]) {
         result[1] += 1;
         found = false
         break
       }

      found = false
        
     }
   }

  return result
}




let x = [5, 6, 7]
let y = [3, 6, 10]

console.log(compareTriplets(x, y))





// let result = []
// result[0] = 0
// result[1] = 0

// //aLoop:
// for(let i = 0; i < a.length; i++){
//     for(let j = 0; j < b.length; j++){
//         if(a[i] > b[j]){
//             result[0]+=1
    
//         }else if(a[i] < b[j]){
//             result[1]+=1

//         }
//     }

// }

// return result



// CORRECT ANSWER HERE
// function compareTriplets(a, b) {
//     let scoreA = 0;
//     let scoreB = 0;
//     for (let i=0;i<3;i++) {
//         if (a[i] > b[i]) {
//             scoreA = scoreA + 1;
//         } else if (a[i] < b[i]) {
//             scoreB = scoreB + 1;
//         }
//     }
//     return [scoreA, scoreB]
// }