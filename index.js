/* var fs = require('fs');
var text = fs.readFileSync("./sowpods.txt", 'utf-8');
var words = text.split('\n')

 var textArr = []
var counter = 0

for(var i = 0; i < words.length; i++){
    if(words[i].startsWith('Y') && words[i].endsWith('Y')){
        counter++
        textArr.push(words[i])
        
    }
}

console.log(counter) */







//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

/* var array = [10, 15, 3, 7]

function listofNumbers(array, k){
    //check if array[0] is eq
    var result = false


    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
        if((i !== j) && (array[i] + array[j] === k)){
            result = true
        }
               
        }
    }


    return result




}

console.log(listofNumbers(array, 17)) */


//Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

//For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
/* var array =  [1, 2, 3, 4, 5]

function productAll(array){
    
    var result = []

    for(var i = 0; i < array.length; i++){
        var product = 1
        for(var j = 0; j < array.length; j++){
            if(array[i] !== array[j]){
               var newResult = product*= array[j]
               


            } 
        }
        result.push(newResult)
    }

    return result


}


console.log(productAll(array)) */


/* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'. */

/* const array = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'},{name: 'Homer'}, {name: 'Spot'} ]

function hashesOfNames(array){
    let stringVar = ''
    for(let i = 0; i < array.length; i++){
        
        if(i == array.length - 1){
            stringVar += array[i].name
        }else if(i == array.length - 2){
            stringVar += array[i].name + ' & '

        } else{
            stringVar += array[i].name + ', '

        }
        

    }
    console.log(stringVar)
    return stringVar

}

hashesOfNames(array) */




/* Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'  */

////////////////////////////////////////////////////////////////////////////




/*  
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.


*/


// Input is an array of strings
// Output is a string
// Constraints is n/a
// Edge case is empty string w/o the common prefix

 function commonPrefixStr(strs){
    // Declare a empty result string
    let result = " "
    let currentLetterIndex = 0

    while(currentLetterIndex < strs[0].length){
        console.log(currentLetterIndex)
        currentLetter = " "
       for(let i = 0; i < strs.length; i++){
            var currentWord = strs[i]
            console.log(currentWord[currentLetterIndex])
        


        
    }
    currentLetterIndex++
}
// I want to check for a match on first letter in string in each array value
// If no match will return empty result string
// If there is a match push match into result string

}


commonPrefixStr(["flower","flow","flight"]) 

/* var test = "maybe a string"
var hard = 36
var easy = true
var array = ["flower", "flow", "sameshit"]
var obj = {name: "Joe Blow", email: "sameshit@gmail.com"}
var devil = undefined
var devil2 = null



  let reaction = 'yikes';
  reaction[0] = 'l';
  console.log(reaction);

let pet = 'Narwhal';
pet = 'The Kraken';
console.log(pet); // ?


let it = 'be';
let them = 'eat cake';
it = them;

console.log(it) */



















































