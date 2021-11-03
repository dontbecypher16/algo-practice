//What are all of the countries that have “United” in the name?

let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function allCountries(nations){

    let results = []

    for(let i = 0; i < nations.length; i++){
        if(nations[i].toLowerCase().includes('united')){
            results.push(nations[i])
        }
    }

    return results


    // const results = nations.filter(nation => nation.includes('United'))
    // return results

}


console.log(allCountries(countries))