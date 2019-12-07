// some function in array

var myArray = [1,2,4,8,10,12];

var oddNumber = function(num){
    var r = num % 2;
    if(r === 0)
    return false;
    return true;
}

var result = myArray.some(oddNumber);

console.log(result);