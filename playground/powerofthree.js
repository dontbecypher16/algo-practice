// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

 

// Example 1:

// Input: n = 27
// Output: true
// Example 2:

// Input: n = 0
// Output: false
// Example 3:

// Input: n = 9
// Output: true

/**
 * Input: number
 * Output: boolean value
 * 
 * We want to know if number is divisible of 3
 * push to stack 
 * if stack[0] isnt equal to 3
 * pop off stack and divide by that 3
 */

// function powerOfThree(n){
//     let stack = []
//     let temp
    

//     while(true){
//         if(stack.length === 0){
//             stack.push(n / 3)
//         }
//        if(stack[0] === 3 || n === 3 || n === 1){
//            return true
//        } else if(!Number.isInteger(stack[0] || n === 0)){
//            return false
//        } else{
//            temp = stack.pop(stack.length - 1)
//            stack.push(temp / 3)
//        }
//     }

    

// }

function recursivePowerOfThree(n){
    

    while(true){
        if(stack.length === 0){
            stack.push(n / 3)
        }
       if(stack[0] === 3 || n === 3 || n === 1){
           return true
       } else if(!Number.isInteger(stack[0] || n === 0)){
           return false
       } else{
           temp = stack.pop(stack.length - 1)
           stack.push(temp / 3)
       }
    }

    

}

//console.log(powerOfThree(1))
console.log(recursivePowerOfThree(81))