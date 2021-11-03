//What is the shortest country name? Make sure your solution can handle ties.


let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function shortestCountry(nations) {
  let result = [];

  let shortest = nations[0];

  for (let i = 0; i < nations.length; i++) {
    let nation = nations[i];
    if (nation.length < shortest.length && nation !== "") {
      shortest = nation;
    
    } 
  }

  for (let j = 0; j < nations.length; j++) {
    let nation = nations[j];
    if (nation.length === shortest.length) {
      result.push(nation)

    }
   
  }

  //return shortest;
  return result;
}

console.log(shortestCountry(countries))