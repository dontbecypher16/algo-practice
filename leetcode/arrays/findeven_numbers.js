let findNumbers = function(nums) {
    let tracker = 0

    for(let i = 0; i < nums.length; i++){
        let digit = nums[i]
        let digitString = digit.toString().length
        if(digitString % 2 == 0){
            tracker++
        }  

    }

    return tracker
    
};


let input = [12,345,2,6,7896, 13, 134, 2445]
console.log(findNumbers(input))



//count how many digits in the numbers
//if it is a even number push into storage array
// count the storage array even numbers now for number with most digits

// for(let j = 0; j < digit.length; j++){
//     if()

// }


    //    for (let j = 0; j < digit.length; j++) {
    //        tracker++
    //      if (tracker % 2 == 0) {
    //         storage.push(digit[j])
        
    //      }
        
    //    }