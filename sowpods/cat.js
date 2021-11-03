var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

function cat(arr){
    let result = []


    for(let i = 0; i < words.length; i++){
        if(words[i].includes('CAT') && words[i].length == 5){
            result.push(words[i])
        }
    }

    return result
    
}

console.log(cat(words))