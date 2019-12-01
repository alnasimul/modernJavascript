// Higher order function

function generate(type){
    if(type === "plus"){
        return (a,b) => a+b;
    }
    else if(type === "minus"){
        return (a,b) => a-b;
    }
    else if(type === "multiply"){
        return (a,b) => a*b;
    }
}

 x = generate("plus");
console.log(x(2,3));