var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')


//Create and print an array containing all of the words that end in "GHTLY"

function ghtly(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i].endsWith('GHTLY')){
            result.push(arr[i])
        }
    }

    return result
}


console.log(ghtly(words))