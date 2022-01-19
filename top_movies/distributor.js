const fs = require('fs')
const csv = require('csvtojson');
const csvFilePath = './top_movies/top_movies.csv'

//What distributor has the most films on this list?

const convertToJson = async (csvFilePath) => {
    const jsonArrayObj = await csv().fromFile(csvFilePath)

    let counterStorage = {}

    for(let i = 0; i < jsonArrayObj.length; i++){
        let movie = jsonArrayObj[i]
        if(!counterStorage.hasOwnProperty(movie.Distributor)){
            counterStorage[movie.Distributor] = 1
        } else {
            counterStorage[movie.Distributor]++

        }

    }

    let maxMovies = 0
    let movieCompany = ''
    for(let key in counterStorage){
        if(counterStorage[key] > maxMovies){
            maxMovies = counterStorage[key]
            movieCompany = key
        }
    }

    

    console.log(movieCompany, maxMovies)


  }

  
 convertToJson(csvFilePath)