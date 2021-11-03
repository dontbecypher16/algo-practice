let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text.split('\n')

//What is the shortest word that contains all 5 vowels?

  function short(arr){
    let result = []
    
    let allWords = arr.filter(word => {
      return word.includes('A') && word.includes('E') && word.includes('I') && word.includes('O') && word.includes('U')
    })
    
   
 
 let shortestWord = allWords[0]
 
 for(let i = 0; i < allWords.length; i++){
   if(allWords[i].length < shortestWord.length){
     shortestWord = allWords[i]
     result.push(shortestWord)
 
     
  }
   
 }
 
 return result

}
   
console.log(short(words))

