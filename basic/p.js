// Prototype related with object

var a = {
    b:15,
    c:"Hello World",
}

var b = Object.create(a);
a.b = 40;

b.b = 90;
console.log(a);
console.log(b);
//console.log(b.hasOwnProperty('b'));