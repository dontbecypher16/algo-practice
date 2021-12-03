var fs = require('fs');
var text = Object.create(null)
var input = fs.readFile("./adventoc/dive_route.txt", 'utf-8', function(err, data){
    text = JSON.parse(data)
    return text
});


function divePlannedRoute(){


}

//let test = input.map(Number)
//console.log(divePlannedRoute())

console.log(input)

