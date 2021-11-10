var reverseVowels = function(s) {
    
    let vowel = {}
    let result = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let strArr = s.split('')
    
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            let indexNum = s.indexOf(s[i])
            if(indexNum === i){
                vowel[s[i]] = indexNum
            }
            
         } 
        
    }

    console.log(vowel)

    for(let i = s.length - 1; i >= 0; i--){
       
    }
    

};

let x = "hello"
console.log(reverseVowels(x))


// iterate forward on string array
    // value of string i, focus on consonants, if its vowel
        // push consonant value in result, if vowel push empty string for placeholder








        // let result = []
        // let vowels = ['a', 'e', 'i', 'o', 'u']
        // let strArr = s.split('')
        // //console.log(strArr)
        
        
        // for(let i = 0; i < s.length; i++){
        //     if(vowels.includes(s[i])){
        //         result.push(s[i])
        //     }
        // }
    
        // console.log(result)
    
        // for(let i = 0; i < strArr.length; i++){
        //     if(vowels.includes(strArr[i])){
        //         let lastVowel = result.pop()
        //             console.log(lastVowel)
        //         strArr[i] = result.pop()
        //     }
        // }
        
        // return strArr.join('')