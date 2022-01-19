/**
 * //Frequency Counter practice
 * 
 * Given two strings, write a function to determine if the second string is anagram
 *  of the first. An anagram is a word, phrase, or name formed by rearrangin the letters
 *  of another, such as cinema, formed from iceman.
 * 
 * 
 * validAnagram('', '')  // true
 * validAnagram('aaz', 'zza')  // false
 * validAnagram('anagram', 'nagaram')  // true
 * validAnagram('rat', 'car')  // false
 * validAnagram('awesome', 'awesom')  // false
 * validAnagram('qwerty', 'qeywrt')  // true
 * validAnagram('texttwisttime', 'timetwisttext')  // true
 * 
 * 
 * 
 */



function validAnagram(string1, string2){

    let counter1 = {}
    let counter2 = {}

    for(let val of string1){
        counter1[val] = (counter1[val] || 0) + 1
    }
    for(let val of string2){
        counter2[val] = (counter2[val] || 0) + 1
    }

    for(let [key, value] in counter1){
        value = counter1[key]
        if(value !== counter2[key]){
            return false
            
        }
    }

    
    return true
}

let temp1 = 'anagram'
let temp2 = 'naaram'

console.log(validAnagram(temp1, temp2))


///Second way to use lookup as well
// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//       return false;
//     }
  
//     const lookup = {};
  
//     for (let i = 0; i < first.length; i++) {
//       let letter = first[i];
//       // if letter exists, increment, otherwise set to 1
//       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }
//     console.log(lookup)
  
//     for (let i = 0; i < second.length; i++) {
//       let letter = second[i];
//       // can't find letter or letter is zero then it's not an anagram
//       if (!lookup[letter]) {
//         return false;
//       } else {
//         lookup[letter] -= 1;
//       }
//     }
  
//     return true;
//   }
  
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   validAnagram('anagrams', 'nagaramm'