//Who was the most charted artist of 2000, and what were their songs that charted?
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


function mostChartedArtist(songs){
    const artistsData = {};

    for(let i = 0; i < songs.length; i++){
        const { song } = songs[i];
        const artist = songs[i].artist.replace(/\sFeaturing.+/, '');

        if(artistsData.hasOwnProperty(artist)) {
            artistsData[artist].count++;
        
            if(!artistsData[artist].songs.includes(song)){
                artistsData[artist].songs.push(song);
            }
        } else {
            artistsData[artist] = {
                count: 1,
                songs: [song]
            }
        }
    }


    let mostCharted = {
        count: 0
    }

    for(let prop in artistsData){
        if(artistsData[prop].count > mostCharted.count){
            mostCharted.artist = prop
            mostCharted.count = artistsData[prop].count
        }
    }
    
    // return {
        //     artistsData,
        //     mostCharted,
        //     artist: mostCharted.artist,
        //     value: artistsData[mostCharted.artist],
        //     output: `artistsData["${mostCharted.artist}"]`
        // }
        
    return {
        artist: mostCharted.artist,
        songs: artistsData[mostCharted.artist].songs
    }
    
}


console.log(mostChartedArtist(songsFile))









// function getOccurrence(array, value) {
//     return array.filter((v) => (v === value)).length;

// }

//     let artists = []
//     let counter = []
//     let answer 
//     let final 
//     let allSongs = []

//     songs.map((song) => {
//         //artists.push(song.artist, song.song)
//         artists.push({
//             artist: song.artist,
//             song: song.song
//         })
//     })

    
//     let artistNames = artists.map((artist) => artist.artist)

//  let artistArr =  artists.map((artist) => {
//      let chartedTimes = getOccurrence(artistNames, artist.artist);
//      counter.push(chartedTimes);
//       answer = {
//         artist: artist,
//         chartedTimes: chartedTimes,
//       };
//       return answer
         
//   })


// //let longest = artistArr[0].chartedTimes
// let mostCharted = Math.max(...counter)
// //final = artistArr.find((artist) => artist.chartedTimes === mostCharted)

// for(let i = 0; i < artistArr.length; i++){
//     if(artistArr[i].chartedTimes === mostCharted){
//        final = artistArr[i]
//     }

// }
// let filtered = artists.filter((artist) => artist.artist === final.artist.artist)
// allSongs.push(filtered)
// let songsOnly = allSongs[0].map((song)=> { return song.song})
// let newSongs = new Set(songsOnly)
// songsOnly = [...newSongs]
// console.log(songsOnly)
// return final

// }
// //console.log(songsFile)
// // 