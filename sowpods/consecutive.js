var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')


/* What are all of the letters that never appear consecutively in an English word? For example, we know that
 “U” isn’t an answer, because of the word VACUUM, and we know that “A” isn’t an answer, because of “AARDVARK”,
  but which letters never appear consecutively? */


// sowpods file in words variable
// letters that never appear consecutively in a word
// N/A
// N/A


function consecutive(arr) {
  // create storage for result
  let result = [];

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let j = 0; j < alphabet.length; j++) {
    let myletter = alphabet[j];
    let myDoubleLetter = myletter + myletter;
    let containsDL = false
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      if (word.includes(myDoubleLetter)) {
          containsDL = true
          break
    
      }
    
    }

    if(containsDL === false){
        result.push(myletter)
    }
  }

  return result;
}


let test = ['BHUNA',  'BLUB', 'UNSWEET', "BAREIOU", "ABEIPOU", "ABOIEU", "VACUUM", "AARDVARK", "ABCEE"]
console.log(consecutive(words))



/*  for(let j = 0; j < word.length; j++){
          let myDoubleLetter = myletter + word[j]
          if(word[j] === myDoubleLetter){
              console.log(word[j])

          }
      }*/