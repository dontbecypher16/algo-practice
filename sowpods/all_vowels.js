var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')


function allVowels(arr){
    let result = []


    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('A') && arr[i].includes('E') && arr[i].includes('I') &&
        arr[i].includes('O') && arr[i].includes('U')){
            result.push(arr[i])
        }
    }

    return result

}



    console.log(allVowels(words))