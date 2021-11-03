//What country names are > 50% vowels?

let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function fiftyPercent(nations){
    let results = []
    let vowels = ['A', 'E', 'I', 'O', 'U']


    for (let i = 0; i < nations.length; i++) {
      let vowelsCounter = 0;
      let consonantsCounter = 0;
      let nation = nations[i];
      for (let j = 0; j < nation.length; j++) {
        if (vowels.includes(nation[j].toUpperCase())) {
          vowelsCounter++;
        } else {
          consonantsCounter++;
        }
      }


      if (vowelsCounter > consonantsCounter) {
        results.push(nation);
      }

    }

    return results


}


console.log(fiftyPercent(countries))