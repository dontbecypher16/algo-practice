// What countries use only one vowel in their name (the vowel can be used multiple times)
// For example, if the word “BEEjEEPER” were a country, it would be an answer, because it only uses “E”.

let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function oneVowelCountry(nations){

    let result = []
    let vowels = ['A', 'E', 'I', 'O', 'U']
    
    for (let i = 0; i < nations.length; i++) {
      let nation = nations[i];
      let target = undefined
      for (let k = 0; k < nation.length; k++) {
          let currentLetter = nation[k].toUpperCase()
          if (vowels.includes(currentLetter)) {
            if(target === undefined){
              target = currentLetter;
            } else if(target !== currentLetter){
              break
            }
          }
          if(k === nation.length - 1){
            result.push(nation)
          }
        }
  
      
      }
      
      return result

  }
    
    console.log(oneVowelCountry(countries))
    
    // When we iterate over nation and hit vowel, it has to be that vowel
    
    //   if(currentLetter === target) {
    //     result.push(nation);
    //   } else {
    //     break;
    //   }
    //