function timeConversion(s) {
    // Write your code here
    
    let arrStr = s.split(':')

    let am = s.endsWith('AM')
    let pm = s.endsWith('PM')


        if(pm){
       arrStr[0] =  +arrStr[0] + 12
       s =  arrStr.toString()
        }
        
     

    return s

}

let time = '07:05:45PM'

console.log(timeConversion(time))

//return moment(input, 'HH:mm:ss').format('h:mm:ss A')
