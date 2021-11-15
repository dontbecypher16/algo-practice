let fs = require('fs');
let text = fs.readFileSync("./sowpods/sowpods.txt", "utf-8");
let words = text.split('\n')
let scores = require('./letter_scores')

