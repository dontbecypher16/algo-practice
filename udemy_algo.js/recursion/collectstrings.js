
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

/**
 * Input: object
 * Output: array of strings
 * 
 * declare empty array for storage to push strings to
 * iterate and drill down in passing object
 * if typeof value is string push to storage array
 * else typeof value is object then we need to check the value for string again
 * 
 * Base case: obj
 * 
 *  
 */

const tempObj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


function collectStrings(passingObj){

    let result = []

    for(let key in passingObj){
        if(typeof passingObj[key] === 'string'){
            result.push(passingObj[key])
        } else if(typeof passingObj[key] === 'object' && !Array.isArray(passingObj[key])){
           return result.concat(collectStrings(passingObj[key]))
        }
    }

    return result

}

console.log(collectStrings(tempObj)) // ["foo", "bar", "baz"])