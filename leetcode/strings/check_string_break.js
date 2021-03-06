// Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

// A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.


// Example 1:
// Input: s1 = "abc", s2 = "xya"
// Output: true
// Explanation: "ayx" is a permutation of s2="xya" which can break to string "abc" which is a permutation of s1="abc".

// Example 2:
// Input: s1 = "abe", s2 = "acd"
// Output: false 
// Explanation: All permutations for s1="abe" are: "abe", "aeb", "bae", "bea", "eab" and "eba" and all permutation for s2="acd" are: "acd", "adc", "cad", "cda", "dac" and "dca". However, there is not any permutation from s1 which can break some permutation from s2 and vice-versa.

// Example 3:
// Input: s1 = "leetcodee", s2 = "interview"
// Output: true

/**
 * Input: two strings
 * Output: boolean value
 * 
 * if both strings are not same length return false
 * declare sorted versions of strings
 * 
 * loop over first string 
 * check second string against first string letter by letter
 * 
 * loop over second string
 * check first string against second letter by letter
 * 
 * return true if all combinations are greater than or equal to
 * less than immediately returns false
 *   
 */



function checkString(s1, s2){

    let string1 = s1.split('').sort()
    let string2 = s2.split('').sort()

    let flag = false

    for(let i = 0; i < string1.length; i++){
        if(string1[i] >= string2[i]){
            flag = true

        }else{
            flag = false
            break
        }

    }

    if(flag === true){
        return true
    }

    for(let i = 0; i < string2.length; i++){
        if(string2[i] >= string1[i]){
            flag = true

        }else{
            flag = false
            break
        }

    }

    return flag


}
 

console.log(checkString("abc","xya"))