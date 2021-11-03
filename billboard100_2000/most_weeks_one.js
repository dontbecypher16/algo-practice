//What song was the #1 song for the most weeks of 2000,
// who was the artist, and how many weeks was it at #1?

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


function mostWeeksNumberOne(songs) {
  let storage = {};

  for (let i = 0; i < songs.length; i++) {
    let rank = songs[i]["rank"];
    let song = songs[i]["song"];
    let artist = songs[i]["artist"]


    if (rank === "1") {
      //console.log({ rank, song, artist})
      if (storage[song] === undefined) {
        storage[song] = {
          artist: artist,
          weeksAtOne: 0
        }
      } 
     storage[song].weeksAtOne++
         
    }
  }

  let result = {
    song: '',
    artist: '',
    weeksAtOne: 0
  }
  

  for (let song in storage) {
    //console.log(storage[song])
    let count = storage[song].weeksAtOne;
    let maxCount = result.weeksAtOne
    if (count > maxCount) {
      result.song = song,
      result.artist = storage[song].artist,
      result.weeksAtOne = storage[song].weeksAtOne
    
    }
  }
  return result

}


console.log(mostWeeksNumberOne(songsFile))

// set up object storage ( keys: songs, values: counter)
// iterate over every line in file
  //get rank, song and artist out of line
    // if rank is number one 
      // if song is already in dictionary 
        // increment counter
      // else 
        // add song and counter of one

//check if song doesnt have artist