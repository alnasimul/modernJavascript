var chai = document.querySelector("#chai");
var roton = document.querySelector("#roton");
var result = document.querySelector("#result");

roton.addEventListener("keypress",function(){
    var match = chai.value.indexOf(roton.value);
    if( match === -1){
        result.innerHTML = `The Value ${roton.value} was not found`;
    }else{
        result.innerHTML = `The Value ${roton.value} was found at ${match}`;
    }
});