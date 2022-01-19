/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers 
 * have the same frequency of digits.
 * 
 * Time: O(N)
 * 
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 * 
 * 
 * Input: numbers
 * Output: boolean value
 * If first num val length is less than or greater than second
 * num val then return false in edge case
 * 
 * If number isnt in obj then initialize it in obj
 * If it is increment the value
 * continue for non-duplicates
 * return false if integer is not in other number
 * 
 */


function sameFrequency(num1, num2){

   let strNum1 = num1.toString();
   let strNum2 = num2.toString();
   if(strNum1.length !== strNum2.length) return false;
   
   let countNum1 = {};
   let countNum2 = {};
   
   for(let i = 0; i < strNum1.length; i++){
     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
   }
   
   for(let j = 0; j < strNum1.length; j++){
     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
   }

   for(let key in countNum1){
     if(countNum1[key] !== countNum2[key]) return false;
   }
  
   return true;
    
  }


  sameFrequency(182, 281)