let tempString = 'Banana'

let indexStr = 2

tempString = tempString.substr(0, indexStr) + tempString.substr(indexStr + 1)

console.log(tempString)