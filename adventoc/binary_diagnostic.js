var fs = require('fs');
var text = fs.readFileSync("./adventoc/binary_input.txt");
const input = text.toString().replace(/\r\n/g, '\n').split('\n');


function binary(arr){
    gamma = '';
  epsilon = '';
​
  const frequencies = {}
​
  for (string of arr) {
    for (let i = 0; i < string.length; i++) {
      if (!frequencies[i]) {
        frequencies[i] = {0: 0, 1: 0} 
      }
      if (string[i] === '0') {
        frequencies[i][0] ++
      } else {
        frequencies[i][1] ++
      }
    }
  }
  for (freq in frequencies) {
    console.log(frequencies[freq])
    if (frequencies[freq]['0'] > frequencies[freq]['1']) {
      console.log('greater');
      gamma += '0'
      epsilon += '1'
    } else {
      console.log('less');
      gamma += '1'
      epsilon += '0'
    }
  }
  console.log({gamma, epsilon})
  console.log(parseInt(gamma, 2) * parseInt(epsilon, 2))

}


console.log(binary(input))

/**
 * Input: 
 * 
 * Output:
 * 
 * Edge cases: most common is gamma, least common is epilson
 * 
 * 
 */