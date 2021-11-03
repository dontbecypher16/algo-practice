var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

function qu(arr){
    let result = []


    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('Q') && !arr[i].includes('U')){
            result.push(arr[i])
        }
    
    }

    return result
}


console.log(qu(words))