var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

function ea(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(!(arr[i].includes('E') || !arr[i].includes('A')) && arr[i].length >= 15){
            result.push(arr[i])
        }
    
    }

    return result
    
}

console.log(ea(words))


