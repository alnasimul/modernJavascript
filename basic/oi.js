// Introduction of Object

var a = {
    a:10,
    b:"Hello World",
}


var e = {
    a:10,
    b:"Hello World",
}

var x = e

x.a = 50;
// adding property in e object

e.c = "Hi";

//deleting property in e object

delete e.a;

console.log(e);



