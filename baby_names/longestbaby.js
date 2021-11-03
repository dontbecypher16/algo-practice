let fs = require('fs');
let text = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8');
let words = text.split('\n')


function longestBaby(arr){
    let result = []
    let longestWord = ''
 
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longestWord.length){
        //set new longest word
        longestWord = arr[i]
        // get rid of results and add new longest word
        result = [longestWord]
     } else if(arr[i].length === longestWord.length){
    
      result.push(arr[i])

    }
      
    }

    return result
    
    
}

console.log(longestBaby(words))