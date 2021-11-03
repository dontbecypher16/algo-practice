// Write a function that takes as an argument a team name and returns an array of all of the years 
// the team has won the NBA finals.


const nba_finals = require('./nba_finals.json')



function allYearsWon(games, team){
    // return games.filter(game => game.Winner === team)
    //             .map(game => game.Year)




    let result = []

    for(let i = 0; i < games.length; i++){
        if(games[i].Winner === team){
            result.push(games[i].Year)
        }
    }

    return result


}

console.log(allYearsWon(nba_finals, "Golden State Warriors"))