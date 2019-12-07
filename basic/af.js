// filter function in array

var myArray = [1,2,4,3,5,7];

var oddNumber = function(num){
    var r = num % 2;
    if( r === 0)
    return false;
    return true;
}

var oddArray = myArray.filter(oddNumber);

console.log(oddArray);