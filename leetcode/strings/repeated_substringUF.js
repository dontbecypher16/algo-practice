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
        let subEndIndex = subStr.length - 1
        
        while(subEndIndex <= s.length - 1){
            let matchString = s.substring(subFirstIndex, subEndIndex+1)
            console.log(matchString, subStr)
            if(subStr !== matchString){
                break
            }
            else{
                if(subEndIndex+1 === s.length){
                    console.log(subEndIndex+1, s.length)
                    if(subStr === matchString){
                        console.log(subStr, matchString)
                        return true
                    }
                    else{
                        break
                    }
                }
                
            }

            subFirstIndex += subStr.length 
            subEndIndex += subStr.length

        }
       
        
    }
    
    return false      
    
};


console.log(repeatedSubstringPattern("abac"))
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