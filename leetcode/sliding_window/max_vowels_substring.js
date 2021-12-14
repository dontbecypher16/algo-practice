// Given a string s and an integer k.
// Return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are (a, e, i, o, u).

// Example 1:
// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.

// Example 2:
// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.

// Example 3:
// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

// Example 4:
// Input: s = "rhythms", k = 4
// Output: 0
// Explanation: We can see that s doesn't have any vowel letters.

// Example 5:
// Input: s = "tryhard", k = 4
// Output: 1


var maxVowels = function(s, k) {

    let lowerCaseS = s.toLowerCase()
    let vowels = "aeiou"
    let storage = []
    let counter = 0
    
    let start = 0
    let end = start + k 
    
    while(start <= lowerCaseS.length - 1){
        let subStr = lowerCaseS.slice(start, end)
        for(let i = 0; i < subStr.length; i++){
            if(vowels.includes(subStr[i])){
                counter++
            }
        }
        storage.push(counter)
        counter = 0

        start++
        end++
    }

    let maxNumber = storage[0]
    for(let j = 0; j < storage.length; j++){
        if(storage[j] > maxNumber){
            maxNumber = storage[j]
        }
    }

    return maxNumber
    
}

let testString = "tryhard"
let l = 4

console.log(maxVowels(testString, l))
// Need to optimize this solution