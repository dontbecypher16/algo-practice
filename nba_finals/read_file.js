const fs = require('fs')

const fileContent = fs.readFileSync('./nba_finals/nba_finals.csv', {encoding: 'utf-8'})
//console.log(fileContent)
const lines = fileContent.split('\r\n')
//console.log(lines)
const keys = lines[0].split(',')
//console.log(keys)


//const games = []
// for(let i = 1; i < lines.length; i++){
//     let columns = lines[i].split(',')
//     const game = {}
//     for(let j = 0; j < columns.length; j++){
//         game[keys[j]] = columns[j]
//     }

//     games.push(game)
// }


const games = lines.slice(1).map((line) => {
    let columns = line.split(',')
    return columns.reduce((prev, curr, i) => ({
        ...prev,
        [keys[i]]: curr
    }), {})
})

// const games = lines.slice(1).map((line) => line.split(',').reduce((prev, curr, i) => ({
// ...prev,
//     [keys[i]]: curr
// }), {}))

console.log(games)

