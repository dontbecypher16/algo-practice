// Write a function that takes as an argument a year and returns the winner of the NBA finals that year.



const fs = require('fs')

const fileContent = fs.readFileSync('./nba_finals/nba_finals.csv', {encoding: 'utf-8'})
const lines = fileContent.split('\r\n')
const keys = lines[0].split(',')

let gamesFile = [];
   
for (let i = 1; i < lines.length; i++) {
  let columns = lines[i].split(",");
  const game = {};
  for (let j = 0; j < columns.length; j++) {
    if (keys[j] === "Year") {
      game[keys[j]] = parseInt(columns[j]);
    } else {
      game[keys[j]] = columns[j];
    }
  }

  gamesFile.push(game);
}


 function getWinnerByYear(year) {
   // return gamesFile.find( (game) => game.Year === year ).Winner
   //return gamesFile.filter((game) => game.MVP !== "").map((game) => game.MVP


   for (let i = 0; i < gamesFile.length; i++){
     if (gamesFile[i].Year === year) {
       
       return gamesFile[i].Winner;
     }

     
   }

   return `There was no NBA Finals game in ${year}. `

   
 }


console.log(getWinnerByYear(2011))
console.log(getWinnerByYear(1900))






