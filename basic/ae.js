//Use of every function in array

var myArray = [2,4,6,10,12,18];

var evenNumber = function(num){
    var r = num % 2;
    if (r === 0)
    return true;
    return false;
}

var result = myArray.every(evenNumber);

console.log(result);