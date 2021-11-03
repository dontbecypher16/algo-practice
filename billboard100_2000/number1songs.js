
const fs = require('fs')

const fileContent = fs.readFileSync('./billboard100_2000/billboard100_2000.csv', {encoding: 'utf-8'})
const lines = fileContent.split('\n')
const keys = lines[0].split(',')


let songsFile = []

for(let i = 1; i < lines.length; i++){
    let songProfile = {}
    let commaWithoutSpace = /,(?!\s)/;
    let values = lines[i].split(commaWithoutSpace)
   for(let j = 0; j < keys.length; j++){

        songProfile[keys[j]] = values[j]
      
   }
   songsFile.push(songProfile)
  
}



function numberOneSongs(songs) {
  let results = [];


  for (let i = 0; i < songs.length; i++) {
       let {song, artist } = songs[i]
       let songEntry = `"${song}" - ${artist}`
       if(songs[i]['rank'] === '1' && !results.includes(songEntry)){
          results.push(songEntry)
      
       }
  }

  
  return results

}


console.log(numberOneSongs(songsFile))


// const quoteSplit = (testLine) => {
//      let values = [];
//      let currentline = testLine;
//      let insideQuotes = false;
//      let currentWord = "";

//      for (let k = 0; k < currentline.length; k++) {
//        let character = currentline[k];
//        // if not inside quotes
//        console.log(character);
//        if (!insideQuotes) {
//          console.log("inside");
//          //if char is a comma
//          if (character === ",") {
//            console.log("comma");
//            if (currentWord !== "") {
//              //add currentword to values
//              values.push(currentWord);
//              // reset current to empty string
//              currentWord = "";
//            }
//            //else char is a quotation mark
//          } else if (character === '"') {
//            console.log("quotes");
//            // set to inside quotes to true
//            insideQuotes = true;
//          } else {
//            console.log("else");
//            currentWord += character;
//          }
//        } else {
//          console.log("outside");
//          // if char not quotaton mark
//          if (character !== '"') {
//            // add char to current word
//            currentWord += character;
//          } else {
//            // set inside quotes back to false
//            insideQuotes = false;
//            // push curent word to values
//            values.push(currentWord);
//            // set current word to empty string
//            currentWord = "";
//          }
//        }
//      }
//      return values;
//    };