var target = 22;
var target2 = 80;
var found = 0;

for(let i = 2; i < target/2; i++){
    let result = target % i;

    if(result){
        continue;
    }

    let result2 = target2 % i;

    if(!result2){
        found = i;
        break;
    }
}
console.log(found);