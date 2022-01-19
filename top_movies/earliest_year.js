const fs = require('fs')
const csv = require('csvtojson');
const csvFilePath = './top_movies/top_movies.csv'

//What is the earliest year on this list, and what were the films from that year?

const convertToJson = async (csvFilePath) => {
    const jsonArrayObj = await csv().fromFile(csvFilePath)

    let result = []
    
    let minYear = parseInt(jsonArrayObj[0]['Release Date'])

    for(let i = 0; i < jsonArrayObj.length; i++){
        let movie = jsonArrayObj[i]
        let yearCheck = parseInt(movie['Release Date'])
        if( yearCheck < minYear){
            minYear = yearCheck
        }
    }

    for(let i = 0; i < jsonArrayObj.length; i++){
        let movie = jsonArrayObj[i]
        if(parseInt(movie['Release Date']) === minYear){
            result.push(movie.Title)
        }
    }


    console.log(result)

 


  }

  
 convertToJson(csvFilePath)


 