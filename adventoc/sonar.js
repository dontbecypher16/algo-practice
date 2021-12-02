var fs = require('fs');
var text = fs.readFileSync("./adventoc/sonar_input.txt", 'utf-8');
var input = text.split('\r\n')

function sonarSweep(measurements) {
  
  let sumStorage = []
  let counter = 0;
  let prevMeasurement = sumStorage[0];

  let startIndex = 0
  let endIndex = 3
  let reducer = (previousValue, currentValue) => previousValue + currentValue;

  for (let i = 0; i < measurements.length; i++) {
    let dynamicCounter = measurements.slice(startIndex, endIndex)
    if(dynamicCounter.length === 3){
        sumStorage.push(dynamicCounter.reduce(reducer))
        startIndex++
        endIndex++

    }

  }

  for (let j = 1; j < sumStorage.length; j++) {
    let measurement = sumStorage[j]

        if(measurement > prevMeasurement){
            counter++
            prevMeasurement = measurement
    
        }else{
            prevMeasurement = measurement
        }

  }

  console.log(sumStorage)
  return counter
}

let test = input.map(Number)
//let testMeasurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
console.log(sonarSweep(test))

/**
 * Have a counter variable
 * increment on counter on every value that has increased from  
 * previous value
 * 
 * 
 * every three indexes, increment on the alphabet
 * iterate over alphabet array
 * alphabet value adds three index sum in its place
 * 
 * use slice to get three values
 * 
 *  
 */


