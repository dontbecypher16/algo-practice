// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

 

// Example 1:
// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

// Example 2:
// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.

// Example 3:
// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

/**
 * Input: string
 * Output: string
 * 
 * repetitive letters need to stay together
 * iterate over the string
 * 
 * 
 * 
 * 
 * 
 */


function sort_chars(string){

    // Declare an empty object
    let obj = {}

    
    // iterate over string
    for(let i = 0; i < string.length; i++){
        // increment if letter is in object declared above, if not declare letter in object in else condition
        if(obj[string[i]]){
            obj[string[i]]++

        }else{
            obj[string[i]] = 1
        }

    }
    
    // Make an array of keys and sort the array of keys
    let keys = Object.keys(obj)
    keys.sort(function(a, b) {return obj[b] - obj[a]})

    // Declare an empty string
    let result = ""
    // Iterate over array of letters
    for(let i = 0; i < keys.length; i++){
        let letter = keys[i]
        let value = obj[letter]

        // result string will concat letter and if value is more than one it duplicate according to number
       result += letter.repeat(value)
    }

    // return result string
    return result

}

let s = "Aabb"
console.log(sort_chars(s))
// console.log(s.split('').sort())