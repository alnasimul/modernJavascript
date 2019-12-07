//Number Sort in Array

var number = [10,20,58,44,1,2,-1,101,222,458]
//Lower order to higher order 
var sorted = number.sort((a,b) => {
    return a-b;
});
console.log(sorted);


// Higher order to lower order

var sorted1 = number.sort((a,b) => {
   return b-a;
})


console.log(sorted1);