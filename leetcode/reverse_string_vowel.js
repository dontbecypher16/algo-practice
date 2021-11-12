var reverseVowels = function (s) {
  let vowel = [];
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let strArr = s.split("");


  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowel.push(s[i]);
    }
  }

  let reverseVowels = vowel.reverse()
  console.log(reverseVowels);
  
  for (let j = 0; j < strArr.length; j++) {
    if (vowels.includes(strArr[j])) {
      let singleVowel = reverseVowels.shift()
      strArr.splice(j, 1, singleVowel);
      console.log(strArr);
    }
    
  }

  return strArr.join('')

}


let x = "hello";
console.log(reverseVowels(x));

// 

// iterate forward on string array
// value of string i, focus on consonants, if its vowel
// push consonant value in result, if vowel push empty string for placeholder

// for(const prop in vowel){
//    // if(s[i] === prop && i === vowel[prop]){
//          let newStr = s.replace(s[i], prop)
//          console.log(newStr)
//          return newStr
//      //}
//  }

// let result = []
// let vowels = ['a', 'e', 'i', 'o', 'u']
// let strArr = s.split('')
// //console.log(strArr)

// for(let i = 0; i < s.length; i++){
//     if(vowels.includes(s[i])){
//         result.push(s[i])
//     }
// }

// console.log(result)

// for(let i = 0; i < strArr.length; i++){
//     if(vowels.includes(strArr[i])){
//         let lastVowel = result.pop()
//             console.log(lastVowel)
//         strArr[i] = result.pop()
//     }
// }
