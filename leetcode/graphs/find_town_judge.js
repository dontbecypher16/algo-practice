/**
 * The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

Example 1:
Input: n = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Example 4:
Input: n = 3, trust = [[1,2],[2,3]]
Output: -1

Example 5:
Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 * 
 *
 * 
 */

// var findJudge = function(n, trust) {

//     let mapOfTrust = new Map

//         let i = 0
//         let j = 0

//         for(let subArr of trust){
//             mapOfTrust.set(i, subArr[j][1])
//             i++, j++
//         }

//     return mapOfTrust


    
// }




/**
 * Input: n for integer value, trust is an array of sub array or sub arrays
 * Output: is integer value 
 * Edge cases: 
 * 
 * index 0 can never be the judge 
 * judge will always be in index 1
 * in each pair no duplicates
 * index 0 and index 1 can not have the same value
 * 
 */

var findJudge = function(N, trust) {
    let trustCounts = new Array(N + 1).fill(0);
    for (let [a, b] of trust) {
        trustCounts[a] = trustCounts[a] - 1;
        trustCounts[b] = trustCounts[b] + 1;
    }

    [0, -3, -1, 3, 1]
    
    for (let i = 1; i < trustCounts.length; i++) {
        if (trustCounts[i] === N - 1) {
            return i
        }
    }
    return -1
};


let noTrust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
let m = 4
console.log(findJudge(m, noTrust))
