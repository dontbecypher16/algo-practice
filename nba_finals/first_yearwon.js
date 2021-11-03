// Write a function that takes as an argument a team name and returns the
//  first year the team won the NBA finals.


const nbaFinals = require('./nba_finals.json')


function firstYearWon(games, team){
    const sortedGames =  games.sort((a, b) => a.Year - b.Year)            
    // return  games.sort((a, b) => a.Year - b.Year)
    //          .find(game => game.Winner === team).Year

    for(let i = 0; i < sortedGames.length; i++){
        if(sortedGames[i].Winner === team){
            return sortedGames[i].Year
        }
        
    }

 }


console.log(firstYearWon(nbaFinals, "Chicago Bulls"))



           