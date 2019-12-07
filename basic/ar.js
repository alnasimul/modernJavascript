// reduce function in array

var myArray = [2,4,6];

var newVal = myArray.reduce((a,b)=>{
    console.log(a,b);
    return a+b;
},0)

console.log(newVal);