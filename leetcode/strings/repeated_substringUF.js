// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.

// Input: s = "aba"
// Output: false

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice

//1 <= s.length <= 104

let repeatedSubstringPattern = function(s) {
    
    let subStr = ""
    
    for(let i = 0; i < s.length; i++){
        subStr += s[i]
        let subFirstIndex = 0
        let subEndIndex = subStr.length
        
        while(subEndIndex <= s.length - 1){
            let matchString = s.substring(subFirstIndex, subEndIndex)
            //console.log(matchString, subStr)
            if(subStr !== matchString){
                break
            }
            else{
                subFirstIndex += subStr.length 
                subEndIndex += subStr.length
                if(subEndIndex === s.length){
                    if(subStr === matchString){
                        return true
                    }
                    else{
                        break
                    }
                }
                
            }

        }
       
        
    }
    
    return false
        
    
};


console.log(repeatedSubstringPattern("abcabcabcabc"))
// iterate over string parameter
    // use the substring method 
    // declare a variable with substring 
    // start index , end index


    // while(subStr.length < s.length){
    //     subStr += s[i]
    // }
    // if(s === subStr){
    //     return true
        
    // }
    // else{
    //     subStr = ""
    // }