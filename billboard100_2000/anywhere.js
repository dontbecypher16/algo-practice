//What song(s) were on the charts (anywhere on the charts) for the most weeks of 2000?

const fs = require('fs')

const fileContent = fs.readFileSync('./billboard100_2000/billboard100_2000.csv', {encoding: 'utf-8'})
const lines = fileContent.split('\n')
const keys = lines[0].split(',')


let songsFile = []

for(let i = 1; i < lines.length; i++){
    let songProfile = {}
    let commaWithoutSpace = /,(?!\s)/;
    let values = lines[i].split(commaWithoutSpace)
   for(let j = 0; j < keys.length; j++){

        songProfile[keys[j]] = values[j]
      
   }
   songsFile.push(songProfile)
  
}


function mostWeeksOnCharts(songs){
    let profiles = {};

    for (let i = 0; i < songs.length; i++) {
        let {song, artist } = songs[i]
         let songEntry = `"${song}" - ${artist}`

         if(profiles[songEntry] === undefined){
             profiles[songEntry] = 1
         } else{
             profiles[songEntry]++
         }

    
    }

    console.log(profiles)

    let currentMost = {
        count: 0
    }
    
    
    for(let prop in profiles){
        if(profiles[prop] > currentMost.count){
            currentMost.song = prop
            currentMost.count = profiles[prop]
        }

       // console.log(`${currentMost.song}`)
    }


    return currentMost.song
    

}

//console.log(profiles)
console.log(mostWeeksOnCharts(songsFile))



