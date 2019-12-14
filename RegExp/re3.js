// Regular expression example 3
// use of replace function using regular expression

var n = "01711115";

var changed = n.replace(/1/g,"১");
var changed = changed.replace(/2/g,"২");
var changed = changed.replace(/3/g,"৩");
var changed = changed.replace(/4/g,"৪");
var changed = changed.replace(/5/g,"৫");
var changed = changed.replace(/6/g,"৬");
var changed = changed.replace(/7/g,"৭");
var changed = changed.replace(/8/g,"৮");
var changed = changed.replace(/9/g,"৯");
var changed = changed.replace(/0/g,"০")

console.log(changed);