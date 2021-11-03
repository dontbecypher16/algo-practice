
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
//representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


//iterate over nums1 array and if index value is 0 shift a index from the start of nums2
// and push into current index of 0 in nums1
// after no more 0's in nums1 we will have to do a sort on nums1

var merge = function(nums1, m, nums2, n) {
    let i, j, k;

    for(i = m - 1, j = n - 1, k = m + n - 1; i >= 0 && j >= 0; k--){
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i--];
        } else {
            nums1[k] = nums2[j--];
        }
    }

    while(i >= 0) {
        nums1[k--] = nums1[i--];
    }

    while(j >= 0) {
        nums1[k--] = nums2[j--];
    }
};

let test1 = [0]
let test2 = [1]
let mm = 0
let nn = 1

console.log(merge(test1, mm, test2, nn))

// let insertNum = nums2.shift();
// nums1.splice()


// if (nums1[i] === 0) {
//     let insertNum = nums2.shift();
//     nums1.splice(i, 1, insertNum);
 

//  }



// let merge = function(nums1, m, nums2, n) {
//     nums1.length == m + n
//     nums2.length == n;

//          if(nums1.length < n){


//         }
        

//     for(let i = nums1.length - 1; i >= n; i++){
//         if(nums2 !== [] && n !== 0){
//            if(m >= n){
//                 let insertNum = nums2.shift();
//                 nums1.splice(i, 1, insertNum);
//            }else{
//                nums1.push([...nums2])
//                console.log(nums1)
//            } 
           
            
//         } //else if(nums2 === []){

//         // }

//     }

//     return nums1.sort()
// }
