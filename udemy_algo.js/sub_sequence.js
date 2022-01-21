/**
 * //Multiple pointers problem
 * Write a function called isSubSequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whehter the characters in the first string appear somewhere in the second string, without their order changing. 
 * 
 * 
 * isSubSequence('hello', 'hello world') // true
 * isSubSequence('sing', 'sting') // true
 * isSubSequence('abc', 'abracadabra') // true
 * isSubSequence('abc', 'acb') // false (order matters)
 * 
 * Input: two strings
 * Output: boolean value
 * 
 * Start with the end index of first string 
 * Find that in the second string
 * Mark that index and only iterate until that point with next value in first string
 * 
 * 
 * 
 */


function isSubSequence(str1, str2) {

    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;

    
  }


  console.log(isSubSequence('abc', 'abracadabra'))