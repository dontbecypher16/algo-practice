// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Input: s = "aba"
// Output: false

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice

let repeatedSubstringPattern = function(s) {
    
    let subStr = ""

    for(let i = 0; i < s.length; i++){
        while(subStr.length < s.length){
            subStr += s[i]
        }
        if(s === subStr){
            return true
            
        }
        else{
            subStr = ""
        }
        
    }
    
    return (subStr === s) ? true : false
        
    
};


console.log(repeatedSubstringPattern("aba"))
// iterate over string parameter
    // use the substring method 
    // declare a variable with substring 
    // start index , end index