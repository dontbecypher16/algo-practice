let fs = require('fs');
let text = fs.readFileSync("./sowpods/sowpods.txt", "utf-8");
let words = text.split('\n')
let scores = require('./letter_scores')

// Write some code that:

// - Takes a 7-character string (either as a command-line argument or as an argument to a function)
// - Prints out the arr that can be made from those characters, along with their Scrabble scores, one word per line, in descending score order

// Example input and output:

// `$ python scrabble_cheater.py SPCQEIU  # Use any language you like.`
// `17 piques`
// `17 equips`
// `16 quips`
// `16 pique`
// `16 equip`
// `15 quip`
// `…`



function scrabble(string, arr, scorecard){
    const foundWords = [];

    // interate over wordlist
    for(let i = 0; i < arr.length; i++){
        let tempString = string.toLowerCase();
        let word = arr[i].toLowerCase();

        // split and iterate over word's letters
        for(let j = 0; j < word.length; j++){
            let letter = word[j]

            // get index of letter in string
            let indexStr = tempString.indexOf(letter)

            // define word score
            let wordscore = 0;

            // if letter is found is string
            if(indexStr > -1){
                // remove letter from string
                tempString = tempString.substr(0, indexStr) + tempString.substr(indexStr + 1)

                // add scrabble points for letter
                wordscore += scorecard[letter];
                
            }else{
                break
            }
            // add points and word to found words
            let foundWord = ''
            foundWord += wordscore.toString()
            foundWord += ' '
            foundWord += word
            foundWords.push(foundWord)

         
        }

        

    }

    //console.log(foundWords)


}
let test = 'SPCQEIU'
console.log(scrabble(test, words, scores))

/**
 * Input
 *  single string value
 * 
 * Output
 *  array of arr using newline
 * 
 * Edge Cases
 *  should it be score for individual word or total score?
 *  score per word
 *  does sowpods word contains string letters?
 *  does sowpods word same length as string length?
 *  filter sowpods first
 *  
 * need to identify when letter is not found and skip word
 * may need to set a flag or determine last letter in word
 * 
 * Examples
 * 
 
 */

