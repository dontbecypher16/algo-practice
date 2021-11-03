var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')


//What are all of the words that have all 5 vowels, in alphabetical order?


// sowpods file in words variable
// array of words with all vowels in alpha. order
// N/A
// N/A

function allVowels(arr){
    // create storage for result
    let result = []

    //tracker of first vowel "A"
    let target = "A"
    let otherVowels = ["E", "I", "O", "U"]

    //check for match of all 5 vowels in alpha. order. If not in alpha go to next word.
    //Iterating over array of words
    for(let i = 0; i < arr.length; i++){
        let word = arr[i]
        //Now iterating over the word itself and accessing each letter
        for(let j = 0; j < word.length; j++){
            let currentLetter = word[j]
            // DEBUG IF STATEMENT
            // if(i === 100000){
            //     console.log('J')

            // }
            //if condition will go to next conditon if otherVowels isnt present in current j
            if(otherVowels.includes(currentLetter)){
                target = "A"
                otherVowels = ["E", "I", "O", "U"]
                break
            }//Now when the letter equals the target it will contine or go back and check the next index back in for loop
             else if(currentLetter === target){
                 //We will reassign target with "U" as a condition and push the word cause we know we have reached all vowels
                if(target === "U"){
               result.push(word)
                   target = "A"
                   otherVowels = ["E", "I", "O", "U"]
                }//If not "U", we will push the target into the otherVowels array and swap out the first index in otherVowels for next target 
                // to check next letter in word
                else{
                    otherVowels.push(target)
                    target = otherVowels.shift()
                }
            
            } 
        }
    }
    return result
}


let test = ['BHUNA',  'BLUB', 'BRU', "BAREIOU", "ABEIPOU", "ABOIEU"]
console.log(allVowels(words))


