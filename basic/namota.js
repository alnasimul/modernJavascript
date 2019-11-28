//let num = +process.argv[2]; -> only available at node.js

//by default use the vaible below;

let num = 7;
if(!Number.isInteger(num)){
    console.log("Provided number is not an integer");
    process.exit();
}

for(let i = 1; i <= 10; i++){
    console.log(`${num} X ${i} = ${num * i}`);
}