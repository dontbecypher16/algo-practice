let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text.split('\n')


//Which of the letters Q, X, and Z is the least common?


//Need a getLeastCommon function
function getLeastCommon(wordsArr){
    //Define counter to trackz letters
    let counter = {Q:0, X:0, Z:0}

    // Iterate through the list and track how many times Q is in array
    for(let listIndex = 0; listIndex < wordsArr.length; listIndex++){
        for(let wordIndex = 0; wordIndex < wordsArr[listIndex].length; wordIndex++){
            //console.log({listIndex, word:wordsArr[listIndex], wordIndex, letter:wordsArr[listIndex][wordIndex]})
            let letter = wordsArr[listIndex][wordIndex]
            if(letter === "Q"){
                counter.Q++
            }else if(letter === "X"){
                counter.X++
            }else if(letter === "Z"){
                counter.Z++
            }


        }
    }

    
    if(counter.Q < counter.X && counter.Q < counter.Z){
        return "Q"

    }else if(counter.X < counter.Z){
        return "X"
    }

    return "Z"




}

let result = getLeastCommon(words)
console.log(result)


