// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

/**
 * Input: string
 * Output: boolean
 * 
 * Handle edge case with string length is 1 return true
 * 
 * 
 */

function isPalindrome(string){

    if(string.length === 1){
        return true
    }

    if(string[0] === string[string.length - 1]){
        return isPalindrome(string.slice(1, string.length - 1))
    }

    return false
 
    
  }

  console.log(isPalindrome('amanaplanacanalpanama'))