// function buildArray(nums) {
//   let ans = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] || nums[i] === 0) {
//       ans.push(nums[nums[i]]);
//     }
//   }

//   return ans;
// }

// console.log(buildArray([5, 0, 1, 2, 3, 4]));

function getConcat(nums) {
  let temp = nums;
  let ans = temp;

  let result = ans.concat(nums);
  return result;
}

console.log(getConcat([1, 2, 1]));

