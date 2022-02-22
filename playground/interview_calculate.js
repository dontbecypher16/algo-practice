// interview practice postfix calculate problem


/**
 * Input: string
 * Output: number
 * 
 * declare a comparision array with all operators
 * declare empty array for stack
 * 
 * convert string to array
 * iterate over string array
 * start pushing to stack array, but if array[i] is equal to one of the operators 
 * then pop off previous two numbers and then parseInt and do operation
 * and push result to stack
 * 
 * return number
 * 
 */



function postfix_calculate(string){

    let stringArr = string.split(' ')
    let stack = []
    let operators = ['+', '-', '*', '/']

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i] === operators[0]){
           let num1 = stack.pop(stack.length - 1)
            let num2 = stack.pop(stack.length - 1)
            stack.push(num2 += num1)
            
        } else if(stringArr[i] === operators[1]){
            let num1 = stack.pop(stack.length - 1)
            let num2 = stack.pop(stack.length - 1)
            stack.push(num2 -= num1)
        } else if(stringArr[i] === operators[2]){
            let num1 = stack.pop(stack.length - 1)
            let num2 = stack.pop(stack.length - 1)
            stack.push(num2 *= num1)
        } else if(stringArr[i] === operators[3]){
            let num1 = stack.pop(stack.length - 1)
            let num2 = stack.pop(stack.length - 1)
            stack.push(num2 /= num1)
        } else{
            stack.push(parseInt(stringArr[i]))
        }
        
    }
    
    
    return stack

}


console.log(postfix_calculate('3 2 1 + + 2 /'))