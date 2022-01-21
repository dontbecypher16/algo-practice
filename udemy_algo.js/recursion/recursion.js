function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num - 1)
}

//console.log(sumRange(3))



/////////////////////////////////////////
// factorial: 4! = 4 * 3 * 2 *1 
//   5! = 5 * 4 * 3 * 2 * 1

//iterative factorial example
function factorial(num){
    let total = 1
    for(let i = num; i > 0; i--){
        total *= i
    }

    return total
}


//console.log(factorial(3))


/////////////////////////////////////////

//recursive factorial example
function recursivefactorial(num){
    if(num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(recursivefactorial(3))
