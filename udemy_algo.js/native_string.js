function nativeSearch(long, substring){

    let counter = 0;

    for(let i = 0; i < long.length; i++){
        isMatch = true
        for(let j = 0; j < substring.length; j++){
            if(substring[j] !== long[i+j]){
                isMatch = false;
                break;
            }

        }

        if(isMatch){
            counter++
        }
    
    }

    return counter

}

console.log(nativeSearch("lorie loled", "lol"))