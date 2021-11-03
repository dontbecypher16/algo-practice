
function plusMinus(arr) {
    let positive = 0
    let negative = 0
    let zero = 0
    
    let size = arr.length
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positive++
        }else if(arr[i] < 0){
            negative++
        }else{
            zero++
        }
        
    }
    
    return [positive/size, negative/size, zero/size]

}


//Iterate over arr 
    //iterate over inner arr to get access to every index



    
let test = [-4, 3, -9, 0, 4, 1]

console.log(plusMinus(test))




















// ENTIRELY DIFFERENT PROBLEM
// function aVeryBigSum(ar) {
//     let sum = 0

//     for(let i = 0; i < ar.length; i++){
//         sum += ar[i]
//     }

//     return sum

// }

// let test = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ]
// console.log(aVeryBigSum(test))