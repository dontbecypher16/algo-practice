//"2+2" => 4

/**
  "aabbbcc" => "a2b3c2"

 "a"  => "a1"
 "abc"
 "ccccacc"
 "" 
 
 
 Input: strings
 
 Output: modified string with subset of letter and integer representing duplicates
 
 Edge cases: lower case letters
 
 declare counter variable 
 declare storage array
 
 iterate over alphabet string in outer loop
 iterate input string in nested loop
 increment counter every match 
 no match push counter 
 reset to zero and increment 
 
 
 */

function strToInt(str) {
  let result = "";
  let counter = 1;
  let i = 0;
  let j = 1;

  while (i < str.length) {
    let prev;
    if (j === str.length - 1 && str[j] === str[i]) {
      counter++;
      result += str[i] + counter;
      counter = 1
      return result
    } else if (j === str.length - 1 && str[j] !== str[i]) {
      return result
    }
    if (str[j] === str[i]) {
      counter++;
      result += str[i] + counter;
      prev = str[i];
      counter = 1
      i++
      j++;
  
    }
    if (str[j] !== str[i] && str[i] === prev) {
      i++
      j++;
    }

  }

  return result;
}

let test = "aabbbcc"
console.log(strToInt(test))
