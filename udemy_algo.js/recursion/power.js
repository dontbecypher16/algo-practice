/**
 * Write a function called power which accepts a base and a exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()- do not worry about negative bases and exponents.
 * 
 * Input: two integers
 * Output: integer
 * 
 * If exponent equals 1 return base
 * If exponent is greater than 1 than set conditon
 * base multiply by base, recursively return function 
 * 
 */

// power(2,0) // 1
// power(2,4) // 16
// power(2,2) // 4
/**
 * 2 * 2 = 4
 * 2 * 2 * 2 * 2 = 16
 * 
 */

function power(base, exponent){

    if(exponent === 0){
        return 1
    }
    if(exponent === 1){
        return base
    }
    
    return base * power(base, exponent - 1)

    
}

console.log(power(2, 2))