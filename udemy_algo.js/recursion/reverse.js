/**
 * 
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 * 
 * Input: string
 * Output: reversed string
 * 
 * base: if string has one char return string
 * recursive: 
 * 
 * 
 */

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

 function reverse(string){

    if(string.length === 1){
        return string
    } else{
       return reverse(string.slice(1)) + string[0]
        
    }
    
  }


  console.log(reverse('awesome'))
  