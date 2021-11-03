// function to find factorial using recursion
// example :
//    5! = 1*2*3*4*5 = 120
//    2! = 1*2 = 2

const factorial = (n) => {
    if (n === 0) {
      return 1
    }
    return n * factorial(n - 1)
  }
  
  // testing
  console.log(factorial(4))
  console.log(factorial(15))
  console.log(factorial(0))


  /////////////////////////////

  // Check whether the given string is Palindrome or not
// const Palindrome = (str) => {
//     if (typeof str !== 'string') {
//       str = str.toString()
//     }
  
//     if (str === null || str === undefined) {
//       return false
//     }
  
//     if (str.length === 1 || str.length === 0) {
//       return true
//     }
  
//     if (str[0] !== str[str.length - 1]) {
//       return false
//     } else {
//       return Palindrome(str.slice(1, str.length - 1))
//     }
//   };
  
//   // testing
//   (() => {
//     console.log('Palindrome: String: a = ', Palindrome('a'))
//     console.log('Palindrome: String: abba = ', Palindrome('abba'))
//     console.log('Palindrome: String: ababa = ', Palindrome('ababa'))
//     console.log('Not Palindrome: String: abbxa = ', Palindrome('abbxa'))
//     console.log('Not Palindrome: String: abxa = ', Palindrome('abxa'))
//   })()