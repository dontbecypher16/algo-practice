let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text.split('\n')

//What is the longest word that contains no vowels?


function getLongestWord(wordsArr){ 
  let allWords = wordsArr.filter(word => {
    return !word.includes('A') && !word.includes('E') && !word.includes('I') && !word.includes('O') && !word.includes('U')
  })

  let longestWord = allWords[0]

  for(let i = 0; i < allWords.length; i++){

    if(allWords[i].length > longestWord.length){
      longestWord = allWords[i]
   
  
 
    }
 
  }

  return longestWord

}


let result = getLongestWord(words)
console.log(result)