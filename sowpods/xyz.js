var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

function xyz(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i].includes('X') && arr[i].includes('Y') && arr[i].includes('Z')){
            result.push(arr[i])

        }
    }

    return result

}
    

    console.log(xyz(words))


