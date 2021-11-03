// Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
 

// Example 1:

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
// Example 2:

// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1

// n == nums1.length
// n == nums2.length
// n == nums3.length
// n == nums4.length
// 1 <= n <= 200
// -228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228



// needs to be optimized because it didnt get submitted for time complexity failure
let fourSumCount = function(nums1, nums2, nums3, nums4) {
    let counter = 0

    for(let i = 0; i < nums1.length; i++){
        let value1 = nums1[i]
        for(let j = 0; j < nums2.length; j++){
            let value2 = nums2[j]
            for(let k = 0; k < nums3.length; k++){
                let value3 = nums3[k]
                for(let l = 0; l < nums4.length; l++){
                    let value4 = nums4[l]
                    if(value1 + value2 + value3 + value4 === 0){
                        counter++
                    
                    }

                }
            }
        }
        
        
    }
    
    return counter
    
    
};

let nums11 = [1,2] 
let nums22 = [-2,-1]
let nums33 = [-1,2] 
let nums44 = [0,2]
console.log(fourSumCount(nums11, nums22, nums33, nums44))













// const fourSumCount = function (A, B, C, D) {
// 	// create an empty object (map)
// 	const map = new Map();
// 	// create an empty array
// 	const cd = [];
// 	// create a counter
// 	let count = 0;

// 	// iterate the length of the arrays (all arrays are same length of n)
// 	for (let i = 0; i < A.length; i++) {
// 		// nested loop over length of arrays (n)
// 		for (let j = 0; j < A.length; j++) {
//       console.log(`A[i]: ${A[i]}`)
//       console.log(`B[j]: ${B[j]}`)
// 			// getting the difference of 0 minus first array at i(A[i]) and second array at j B[j]
// 			let diff = 0 - (A[i] + B[j]);
//       console.log(`Dif: ${diff}`);
// 			// if map object has the key of diff
// 			if (map.has(diff)) {
//         // adding a key value pair to map where the key is diff and the value is diff value plus 1
//         console.log(`Map has diff: `);
//         console.log(`Map before setting: ${map}`);
// 				map.set(diff, map.get(diff) + 1);
//         console.log(`Map after setting: ${map}`);
// 			} else {
//         // adding a key value pair to map where the key is diff and the value is 1
//         console.log(`Map does not have diff: `);
//         console.log(`Map before setting: ${map}`);
//         console.log({map});
// 				map.set(diff, 1);
//         console.log(`Map after setting: ${map}`);
//         console.log({map});
// 			}
// 			// push third array at i (C[i]) plus fourth array at j D[j] into the cd array
//       console.log('Adding sum of 3rd and 4th array at i and j to cd array ')
//       console.log(`Cd before setting: ${cd}`);
// 			cd.push(C[i] + D[j]);
//       console.log(`Cd after setting: ${cd}`);
// 		}
// 	}
// 	// iterate over the length of the cd array
// 	for (let i = 0; i < cd.length; i++) {
// 		// get the current item of cd array at i index
// 		let cur = cd[i];
//     console.log(`Current item: ${cur}`);
// 		// the map has the current item of the cd array as a key
// 		if (map.has(cur)) {
//       // add the value of the current item as a key in the map to the count
//       console.log(`Map has current item: `)
//       console.log(`Count before: ${count}`)
// 			count += map.get(cur);
//       console.log(`Count after: ${count}`)
// 		}
// 	}
//   // return the count
// 	return count;
// };

// const testFourSum = () => {
// 	const nums1 = [1, 2];
// 	const nums2 = [-2, -1];
// 	const nums3 = [-1, 2];
// 	const nums4 = [0, 2];
// 	console.log(fourSumCount(nums1, nums2, nums3, nums4));
// };

// testFourSum();