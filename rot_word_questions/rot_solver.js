
// Part I

// (If you’ve heard of a rot13 letter substitution cipher, this question is a generalization of that cipher)

// Write a function `rot` that:

// - takes as arguments: an input string and an amount by which to shift the letters in the string
// - returns: the input string, shifted by the shift amount

// The function should preserve case — it should be able to handle both upper and lowercase letters — and it should not alter punctuation. The function should support negative numbers. The function should support large shift numbers.

// Sample inputs and outputs:


//     rot("HELLO", 1) -> "IFMMP" # shift right by 1
//     rot("HELLO", 2) -> "JGNNQ" # shift right by 2
//     rot("HELLO", -1) -> "GDKKN" # shift left by 1
//     rot("HELLO", 27) -> "IFMMP" # shift right by 27, wrapping back to the beginning
//     rot("Hello, Rick", 1) -> "Ifmmp, Sjdl" # Preserve case and punctuation
//     rot(rot("Hello, Rick", 1), -1) -> "Hello, Rick"

// Writing this function will require familiarity with converting between character and ordinals. For example, Python has the `ord` and `chr` functions, and JavaScript has the `charCodeAt` and `fromCharCode` String methods.

// You may also find reviewing modular arithmetic (using `%`) to be helpful.

// Part II

// Using your `rot` function, write a function `decrypt` that takes a text encrypted using a shift substitution cipher of an unknown shift amount, and returns a tuple containing `(the shift used to encrypt the original string, the original string)`.

// You will need a dictionary or word list. An input string needs to be long enough to unambiguously determine the the shift used, or there could be multiple valid shifts.

// Sample inputs and outputs:


//     decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft") -> ("It was the best of times, it was the worst of times", 1)

/////////////////////////////////////////////////////////////////////

// sameShit.charCodeAt()
    //console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
    // expected output: "The character code 113 is equal to q"
// String.fromCharCode()
    // Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), rather than as a method of a String object you created.

    //0 - str.length - 1

    //65-90 A-Z  97-122 a-z
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    // "abcdefghijklmnopqrstuvwxyz"

// Think about punctuation and white space, will have to skip these.



 exports.rot13 = function(str, shift) {
  const letters = 26;
  const lowercaseLowerBound = 97;
  const lowercaseUpperBound = lowercaseLowerBound + 25;
  const uppercaseLowerBound = 65;
  const uppercaseUpperBound = uppercaseLowerBound + 25;

  let rotResult = "";

  if(Math.abs(shift) > letters){
    shift %= letters;
  }

  for (let i = 0; i < str.length; i++) {
    let currentIndex = str.charCodeAt(i);
    let isLowerCase =
      currentIndex >= lowercaseLowerBound &&
      currentIndex <= lowercaseUpperBound;
    let isUpperCase =
      currentIndex >= uppercaseLowerBound &&
      currentIndex <= uppercaseUpperBound;

    let shiftedIndex = currentIndex + shift;

    if (isLowerCase) {
      if (shiftedIndex >= lowercaseUpperBound) {
        shiftedIndex -= letters;
      } else if (shiftedIndex <= lowercaseLowerBound) {
        shiftedIndex += letters;
      }
    }
    if (isUpperCase) {
      if (shiftedIndex >= uppercaseUpperBound) {
        shiftedIndex -= letters;
      } else if (shiftedIndex <= uppercaseLowerBound) {
        shiftedIndex += letters;
      }
    }

    let result = String.fromCharCode(shiftedIndex);

    if(isUpperCase || isLowerCase){
      rotResult += result;

    }
      else{
        rotResult += str[i];

      }
      
    }
    
  return rotResult;
}

//"JGNNQ"
// let shift = 1
// let encoded = rot13("Hello, Rick", shift)
// //let decoded = rot13(rot13(encoded, -shift), -1)
// console.log(encoded)
// console.log(decoded)



// rot("HELLO", 1) -> "IFMMP" # shift right by 1
// //     rot("HELLO", 2) -> "JGNNQ" # shift right by 2
// //     rot("HELLO", -1) -> "GDKKN" # shift left by 1
// //     rot("HELLO", 27) -> "IFMMP" # shift right by 27, wrapping back to the beginning
// //     rot("Hello, Rick", 1) -> "Ifmmp, Sjdl" # Preserve case and punctuation
// //     rot(rot("Hello, Rick", 1), -1) -> "Hello, Rick"


/*

c a t
99 97 116 

shift cat  by 5
104 102 121
h f y

 //65-90 A-Z  97-122 a-z  shiftedIndex < 97
      // 90 + 8 = 98
      // 97 + 1 = 98
      // which one to rotate back?

      // if lowercase
      //less than // add += letters
      // do opposite ifUppercase
      //



console.log("t".charCodeAt(0))
// console.log(String.fromCharCode(104, 102, 121))
*/



// || shiftedIndex > 90) {
//   shiftedIndex += 26;
// } else if (shiftedIndex < 97 || shiftedIndex > 122) {
//   shiftedIndex -= 26;
// }



// function rot(str, shift) {
//   const upperMin = 65;
//   const upperMax = 90;
//   const lowerMin = 97;
//   const lowerMax = 122;
//   let result = '';

//   if (shift > 26) {
//       shift %= 26;
//   }

//   for (let i = 0; i < str.length; i++) {
//       const currentIndex = str.charCodeAt(i);
//       const shiftedIndex = currentIndex + shift - 1;
//       const isOutsideUpper = !(currentIndex >= upperMin && currentIndex <= upperMax);
//       const isOutsideLower = !(currentIndex >= lowerMin && currentIndex <= lowerMax);
//       const isLowerCase = isOutsideUpper;
//       const min = isLowerCase ? lowerMin : upperMin;
//       const max = isLowerCase ? lowerMax : upperMax;
//       const isShiftedLeft = currentIndex > shiftedIndex;
//       const isWrapped = isShiftedLeft ? shiftedIndex < min : shiftedIndex > max;
//       let computedIndex = shiftedIndex;
//       //     console.log({currentIndex, shift, shiftedIndex, isOutsideUpper, isOutsideLower, isLowerCase, min, max, isShiftedLeft, isWrapped})

//       if (isOutsideUpper && isOutsideLower) {
//           result += str[i];
//           continue;
//       }

//       if (isWrapped) {
//           computedIndex = isShiftedLeft ? max - shift : min + shift;
//       }

//       result += String.fromCharCode(computedIndex);
//   }

//   return result
// }


// let rotResult = "";

// if(Mathabs(shift) > letters){
//   shift %= letters
// }


// for (let i = 0; i < str.length; i++) {
//   let currentIndex = str.charCodeAt(i);
  
//   if (
//     (currentIndex >= 65 && currentIndex <= 90)
//     (currentIndex >= 97 && currentIndex <= 122)
//     ) {
//     if (shift < -26 || shift > 26) {
//       shift %= 26;
//     }

//     //65-90 A-Z  97-122 a-z  shiftedIndex < 97
//     // 90 + 8 = 98
//     // 97 + 1 = 98
//     // which one to rotate back?

//     // if lowercase
//     //less than // add += letters
//     // do opposite ifUppercase
//     //

// //     let shiftedIndex = currentIndex + shift;
// //     if (shiftedIndex < 65){
       
// //     }

// //     let result = String.fromCharCode(shiftedIndex);
// //     rotResult += result;
// //     //console.log(rotResult, "first one")
// //   } else {
// //     rotResult += str[i];
// //     //console.log(rotResult, "second one")
// //   }
// // }

// // return rotResult;