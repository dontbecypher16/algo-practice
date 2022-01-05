function addUpTo(n){
    return n * (n + 1) / 2;
}


function addUpTo2(n){
    let total = 0

    for(let i = 1; i <= n; i++){
        total += i;
    }

    return total
}



function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

console.log(addUpTo(6))
console.log(addUpTo2(6))