// Regular expression example 1
var r = RegExp('^[a-z_][a-z0-9_]*','i');

var s = "abcc";

console.log(r.test(s));