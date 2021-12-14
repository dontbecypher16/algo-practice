const fs = require('fs');
const arry = fs.readFileSync('./adventoc/dive_route.txt');
const arr = arry.toString().replace(/\r\n/g, '/n').split('/n');


function divePlannedRoute(arr){
    let horizontal = 0;
    let depth = 0;
  ​
    for (direction of arr) {
  ​
      let firstChar = direction[0];
      let number = parseInt(direction[direction.length - 1]);
  ​
      switch (direction[0]) {
        case 'f':
          horizontal += number;
          break;
        case 'd':
          depth += number;
          break;
        case 'u':
          depth -= number;
        default:
          break;
      }
    }
    console.log({horizontal, depth})
    console.log(horizontal * depth);
  }
  ​
  ​




//let test = input.map(Number)
//console.log(divePlannedRoute())

console.log(input)

