const fs = require('fs')
const csv = require('csvtojson');
const csvFilePath = './top_movies/top_movies.csv'

// What is the distribution of ratings? (How many are PG, PG-13, R, etc.?) 

/**
 * Input: array of objects
 * Output: object 
 * 
 *  
 */


const convertToJson = async (csvFilePath) => {
    const jsonArrayObj = await csv().fromFile(csvFilePath)

    let storage = {}

    jsonArrayObj.forEach(movie => {
        if(!storage[movie.Rating]){
            storage[movie.Rating] = 1

        } else {
            storage[movie.Rating]++
        }

    })



 

    console.log(storage)

  }

  
 convertToJson(csvFilePath)