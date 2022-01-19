function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        //checking if already there if not initialize it
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false

        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false

        }
    }

    return true


}

let temp1 = [1, 2, 3, 2]
let temp2 = [4, 4, 1, 9]

console.log(same(temp1, temp2))



/**
 * [1, 2, 3], [4, 1. 9] //true
 * [1, 2, 3], [1, 9]   //false
 * [1, 2, 3], [4, 4, 1]  //false
 * [1, 2, 3, 2], [4, 4, 1, 9]  //true
 * 
 * 
 * 
 * // For naive solution
 * Use ** 2 for squared 
 * Use indexOf() and splice()
 * 
 * 
 * But solution above is refactored frequency solution
 */