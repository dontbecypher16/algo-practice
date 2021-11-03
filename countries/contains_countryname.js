//There is at least one country name that contains another country name. 
//Find all of these cases.

let fs = require('fs');
let text = fs.readFileSync("./countries/countries.txt", "utf-8");
let countries = text.split('\n')


function containsAnotherCountryName(nations){

    let result = {}

    for(let i = 0; i < nations.length; i++){
        let parent = nations[i].toLowerCase()
        for(let j = 0; j < nations.length; j++){
            let child = nations[j].toLowerCase()
            if(parent.replace().includes(child.replace()) && child !== '' && parent !== child){
                result[parent] = child
                
            }
        }
    }

    return result

}


console.log(containsAnotherCountryName(countries))



