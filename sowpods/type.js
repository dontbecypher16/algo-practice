var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

//How many words contain the substring "TYPE”?

function type(arr){
    let result = []
    let counter = 0
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('TYPE')){
            counter++
            result.push(arr[i])
        
        }
    }

    return counter
}


console.log(type(words))