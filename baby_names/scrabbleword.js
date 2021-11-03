let fs = require('fs');
let text = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8');
let babyNames = text.split('\n')
let text2 = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text2.split('\n')

// There is at least one baby name from the top 40 baby names for 2020 that, 
// when spelled backwards, is a valid Scrabble word. Find and print all such names.


//array of strings
// output all valid words spelled backwards
// n/a
// n/a
//  babyNames = ["BOB"]
//  words = ["BOB", "ADAM"]


function reverseBabyName(str){
 return str
    .split("")
    .reverse()
    .join("")
    .toUpperCase()

}

function scrabble(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        reverseBabyName(arr[i])
        if(words.includes(reverseBabyName(arr[i]))){
            result.push(arr[i])

        }

    }

    return result
}



console.log(scrabble(babyNames))