let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text.split('\n')


//Which of the letters Q, X, and Z is the least common?


//Need a getLeastCommon function
function getLeastCommon(wordsArr, letters){
    //Define counter to trackz letters
    let counter = {}
    for(let lettersIndex = 0; lettersIndex < letters.length; lettersIndex++){
        counter[letters[lettersIndex]] = 0
    }


    // Iterate through the list and track how many times Q is in array
    for(let listIndex = 0; listIndex < wordsArr.length; listIndex++){
        for(let wordIndex = 0; wordIndex < wordsArr[listIndex].length; wordIndex++){
            //console.log({listIndex, word:wordsArr[listIndex], wordIndex, letter:wordsArr[listIndex][wordIndex]})
            let letter = wordsArr[listIndex][wordIndex] 
            if(letters.includes(letter)){
                counter[letter]++
            }


        }
    }
    let counterEntries = Object.entries(counter)
    // let leastCommon = {
    //     [counterEntries[0][0]]: counterEntries[0][1]
    // }

     let leastCommonLetter = counterEntries[0][0]
     let leastCommonCount = counterEntries[0][1]

    for(let counterIndex = 0; counterIndex < counterEntries.length; counterIndex++){
        let currentLetter = counterEntries[counterIndex][0]
        let currentCount = counterEntries[counterIndex][1]
        
        if(currentCount < leastCommonCount){
            leastCommonLetter = currentLetter
            leastCommonCount = currentCount
        }
    }
  
    return leastCommonLetter

}

let letters = ["E", "A", "F", "G", "X", "P"]
let result = getLeastCommon(words, letters)
console.log(result)

