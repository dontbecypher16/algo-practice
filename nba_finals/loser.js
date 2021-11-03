//Which teams have made it to the NBA finals but have never won?


const nbaFinals = require('./nba_finals.json')


function losers(games){
    let winners = []
    let losers = []

    for(let i = 0; i < games.length; i++){
        winners.push(games[i].Winner)
        
    }

    for(let i = 0; i < games.length; i++){
        if(!winners.includes(games[i].Loser) && !losers.includes(games[i].Loser)){
            losers.push(games[i].Loser)
        }
        
    }

    return losers

}


console.log(losers(nbaFinals))



// // function getFinalsLosers(games) {
//   // create initial empty results object
//   const winners = [];
//   const losers = [];

//   function filterWinners(games, winners, losers) {
//     if (games.length === 0) {
//       // we're done, return the results
//       if (winners.length === 0) {
//         return losers;
//       }

//       // get the winner and its index in the losers table
//       const winner = winners.pop();
//       const winnerIndex = losers.indexOf(winner);

//       // if it's in winners, remove it from losers
//       if (winnerIndex > -1) {
//         losers.splice(winnerIndex, 1);
//       }
//     } else {
//       const { Winner: winner, Loser: loser } = games.pop();
    
//       if (!winners.includes(winner)) winners.push(winner);
//       if (!losers.includes(loser)) losers.push(loser);
//     };

//     // if we make it here, we still have morw winners to check
//     return filterWinners(games, winners, losers);
//   }

//   return filterWinners(games, winners, losers);
// }
// // 