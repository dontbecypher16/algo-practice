/**
 *Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 

Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
 

Constraints:

0 <= n <= 105

declare empty array
declare i
iterate over n
convert i binary





*/

// const myInput = 5;
// console.log(myInput.toString(2));
// // 1101

function counting_bits(n) {
  let result = [];
  let i = 0;

  while (i <= n) {
    let counter = 0;
    let convert = i.toString(2);
    for (let value of convert) {
      if (value === "1") {
        counter++;
      }
    }

    result.push(counter);
    i++;
  }

  return result;
}

console.log(counting_bits(5));
