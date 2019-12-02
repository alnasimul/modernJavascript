// Class 

function Animal(type,live){
    this.type = type;
    this.live = live;
}

class Human extends Animal{
    constructor(name){
        super("Mammal",true);
            this.name = name;
     }
}

var anam = new Human("Anam");

console.log(anam.type);
console.log(anam.name);
console.log(anam.live);