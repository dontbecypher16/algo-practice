//What countries both begin and end with a vowel?

let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function beginAndEndWithVowel(nations){

   const results = nations.filter(nation => {
       let firstLetter = nation.charAt(0)
       return firstLetter.match(/[aeiou]/i)
   })

  return results.filter(result => {
    let findLastIndex = result.lastIndexOf("")-1
    let lastLetter = result.charAt(findLastIndex)

    return lastLetter.match(/[aeiou]/i)

   })


}

console.log(beginAndEndWithVowel(countries))


// f(nations[i].startsWith('A') || nations[i].startsWith('E') || nations[i].startsWith('I') ||
//         nations[i].startsWith('O') || nations[i].startsWith('U'))