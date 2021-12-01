var fs = require('fs');
var text = fs.readFileSync("./adventoc/sonar_input.txt", 'utf-8');
var input = text.split('\r\n')

function sonarSweep(measurements){

let counter = 0
let prevMeasurement = measurements[0]

for(let i = 1; i < measurements.length; i++){

    let measurement = measurements[i]

    if(measurement > prevMeasurement){
        counter++
        prevMeasurement = measurement

    }else{
        prevMeasurement = measurement
    }

}

return counter

}

let test = input.map(Number)
//let testMeasurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]
console.log(sonarSweep(test))
console.log(test)

/**
 * Have a counter variable
 * increment on counter on every value that has increased from  
 * previous value
 *  
 */