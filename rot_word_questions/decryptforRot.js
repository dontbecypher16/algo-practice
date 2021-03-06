const rot = require('./rot_solver')
const wordBank = require('./word_bank')

// Using your `rot` function, write a function `decrypt` that takes a text encrypted using a shift substitution cipher of an unknown shift amount, and returns a tuple containing `(the shift used to encrypt the original string, the original string)`.

// You will need a dictionary or word list. An input string needs to be long enough to unambiguously determine the the shift used, or there could be multiple valid shifts.

// Sample inputs and outputs:


//     decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft") -> ("It was the best of times, it was the worst of times", 1)


/**
 * 
 * What is the goal?
 * Waht do I need to know?
 * What are the steps?
 * What are the conditions?
 * 
 * 
 * 
 * Will have to shift until text is legible.
 * Have to output one number for shift, not many.
 * space and punctuation can be ignored
 * use sowpods
 * 
 * 
 * It was uif best of times, it was uif worst of times
 * 
 * 
 * 
 */

// //  export default function generate(text) {
// //     const shift = Math.floor(Math.random() * 26 + 1);
// //     return rot(text, shift);
// }

function decrypt(text) {


  for (let i = 0; i < 26; i++) {
    let decoded = rot.rot13(text, i)
      let newDecoded = decoded.split(/[\s\W]+/)
      //console.log(newDecoded)
      for(let j = 0; j < newDecoded.length; j++){
        //check if word is valid against wordbank
        if(!wordBank.has(newDecoded[j].toUpperCase())){
          // if word is not valid then break in iteration
          //debugger
          break
        } 
        else if(j === newDecoded.length -1){
          // if word is valid return text and shift(or i)
        console.log(decoded, i)

        }

      }
    
  }

}

console.log(decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft"))

// do a shift then check against wordbank
  // if it doesnt equal to a legible word then continue on to another shift