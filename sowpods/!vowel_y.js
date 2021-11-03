var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

function vowelY(arr){
let result = []


for(let i = 0; i < arr.length; i++){
    if(!arr[i].includes('A') && !arr[i].includes('E') && !arr[i].includes('I') &&
     !arr[i].includes('O') && !arr[i].includes('U') && !arr[i].includes('Y')){
         result.push(arr[i])
     } 
}

return result

}


console.log(vowelY(words))