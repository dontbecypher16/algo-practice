let fs = require('fs');
let text = fs.readFileSync("./baby_names_2020_short.txt", 'utf-8');
let words = text.split('\n')


//What is the shortest baby name in the top 40 baby names for 2020?

function shortestBaby(arr){
    let shortestWord = arr[0]
 
    for(let i = 1; i < arr.length; i++){
      if(arr[i].length < shortestWord.length && arr[i] !== ''){
        shortestWord = arr[i]
        
    
        
     }
      
    }
    return shortestWord
    
}

console.log(shortestBaby(words))