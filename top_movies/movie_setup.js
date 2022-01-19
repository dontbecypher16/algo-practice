const fs = require('fs')
const csv = require('csvtojson');
const csvFilePath = './top_movies/top_movies.csv'


const convertToJson = async (csvFilePath) => {
    const jsonArrayObj = await csv().fromFile(csvFilePath)

        let highestPaid = 0
        let result
        for(let i = 0; i < jsonArrayObj.length; i++){
            let movie = jsonArrayObj[i]
            if(movie['US Sales'] > highestPaid && movie.Distributor === 'Universal Pictures'){
                highestPaid = movie['US Sales']
                result = movie.Title
            }
        
    
        }
    
        console.log(result, highestPaid)

  }

  
 convertToJson(csvFilePath)




