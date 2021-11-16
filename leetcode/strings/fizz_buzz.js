// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]



let fizzBuzz = function(n) {
    let arr = []

    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 3 === 0){
            arr.push("FizzBuzz")

        }
        else if(i % 3 === 0){
            arr.push("Fizz")
        }
        else if(i % 5 === 0){
            arr.push("Buzz")
        }else{
            arr.push(i.toString())
        }
    }

    return arr
    
};

// declare empty array
// random number, n
// for loop


console.log(fizzBuzz(15))