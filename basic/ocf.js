// Object Creation by construct and factory method

//Factory Method Sample Given Below

function CreateHuman(name,age,gender){
    return {
        name:name,
        age:age,
        gender:gender
    }
}

var a = CreateHuman("Sadaf",24,"M");
var b = CreateHuman("Anam",35,"M");

//console.log(a);
//console.log(b);
// In ModernJavascript Version
function CreateHuman(name,age,gender){
    return {
        name,
        age,
        gender
    }
}

var a = CreateHuman("Sadaf",24,"M");
var b = CreateHuman("Anam",35,"M");

//console.log(a);
//console.log(b);

//Constructor Method

function Human(name,age,gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}

var c = new Human("Nasim",24,"M");
var d = new Human("Hasin",42,"M");

console.log(c);
console.log(d);
