let fs = require('fs');
let text = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8');
let text2 = fs.readFileSync("./baby_names_1880_short.txt", 'utf-8');
let words = text.split('\n')
let words2 = text2.split('\n')


function namesInBothFiles(arr, arr2){
    let result = []

    for(let i = 0; i < arr.length; i++){
        let word = arr[i]
        for(let j = 0; j < arr2.length; j++){
            let word2 = arr2[j]
            if(word === word2){
                result.push(word2)
            }
        }

    }

    return result



}



console.log(namesInBothFiles(words, words2))

