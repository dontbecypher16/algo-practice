function staircase(n) {
    let stair = ''
    let space = ''

    for(let i = 0; i < n; i++){
        space += ' '
    }
    for(let j = 0; j < n; j++){
        stair += '#'
        space = space.slice(1)
        console.log(space + stair)
    }

}

staircase(4)



// for(let i = 0; i < n; i++){
//     stair += '#'
//     let space = ''.padStart(n - i - 1, ' ')
//    const result = space + stair
//     console.log(result)
//  }




// function pyramid(length) {
//     for (let i = 0; i < length; i++) {
//       console.log("".padStart(i + 1, '#').padStart(length, " "));
//     }
//   }
  