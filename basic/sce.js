// Short Circuit Evaluation

var a=0;

a || (a=5);
/*
in that case if first expression return false then second expression will be executed 
first expression will not be executed
on the other hand if first expression retrun true then first expression will be excuted 
second expression will not be executed 
*/

console.log(a);

//- - - - - //

var b = 0;

b && (b=5)
/*
in that case if first expression return false then second expression will not be executed 
only first expression will be excuted
on the other hand if first expression retrun true then first expression will not be excuted 
second expression will be executed
 */

console.log(b);