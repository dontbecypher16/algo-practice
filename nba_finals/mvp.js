
//  Print out a ranking of who has won the MVP more than once, by times one,
//  e.g. this output:
// - 6 times: Michael Jordan
// - 3 times: Shaquille O'Neal, LeBron James
// - 2 times: <etc>

// //const parse = require('csv-parse')
// const fs = require('fs') 

// var parser = parse({columns: true}, function (err, records) {
// 	console.log(records);
// });

// fs.createReadStream(__dirname+'/nba_finals.csv').pipe(parser);


const nbaFinals = require('./nba_finals.json')


function mvpMultipleTimes(games, player) {
  let mvpPlayers = [];
  let counter = 0;
  for (let i = 0; i < games.length; i++) {
    mvpPlayers.push(games[i].MVP);
  }
  for (let j = 0; j < mvpPlayers.length; j++) {
	if (mvpPlayers[j] === player) {
		counter++
	}
  }


  return `${counter} times: ${player}`
}

console.log(mvpMultipleTimes(nbaFinals, "Michael Jordan"))

















// const data = []
// let newArr = []

// fs.createReadStream('./nba_finals/nba_finals.csv')
//   .pipe(parse({ delimiter: ',' }))
//   .on('data', (r) => {
//     //console.log(r);
//     data.push(r);        
//   })
//   .on('end', () => {
  
//   //console.log(data)
//   let newData = data.slice(1)

//  for (let i = 0; i < newData.length; i++) {
//    let secondArr = newData[i];
//    for (let j = 0; j < secondArr.length; j++) {
//      newArr.push(secondArr[4]);
//    }
//  }

//  console.log(newArr);


//   })



//   var jsonObj = [];
// var headers = arr[0].split(',');
// for(var i = 1; i < arr.length; i++) {
//   var data = arr[i].split(',');
//   var obj = {};
//   for(var j = 0; j < data.length; j++) {
//      obj[headers[j].trim()] = data[j].trim();
//   }
//   jsonObj.push(obj);
// }
// JSON.stringify(jsonObj);