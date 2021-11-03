let fs = require('fs');
let text = fs.readFileSync("./sowpods.txt", 'utf-8');
let words = text.split('\n')


//What is the longest palindrome?

/*
Input of array of words
Output of the longest palindrome(same word going forward and backwards)
Constraints: n/a
Edge Cases: n/a 
*/

function isPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;

        } 
    }
    return true;
}

function longestPalindrome(array) {
    
    let longest = ''

    for (var i = 0; i < array.length; i++) {
        let word = array[i]
        if (isPalindrome(word)) {
            if ((word.length > longest.length)) {
                longest = word;
                
            } 
        }
           
        
    }

    return longest

}





let testStr = "racecar" 
// console.log(isPalindrome(testStr))
console.log(longestPalindrome(words))



/*
function isPalindrome(str) {
    for (var k = 0; k < str.length; k++) {
        if (str[k] !== str[str.length - 1 - k]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(str) {
    var longer = '';
    var tmpStr = '';
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            tmpStr = str.slice(i, j+1);
            if (isPalindrome(tmpStr)) {
                if ((tmpStr.length > longer.length)) {
                    longer = tmpStr;
                    arr.length = 0;
                    arr.push(tmpStr);
                } else if ((tmpStr.length === longer.length)) {
                    arr.push(tmpStr);
                }
            }
        }
    }
    return arr;
}


*/