var age = 18;
var gender = "Female";

// if(age >= 21 && gender === "Male"){
//     console.log("Cheler Biyer Boyosh Hoyeche");
// }else if(age >= 18 && gender === "Female" ){
//     console.log("Meyer Biyer Boyosh Hoyeche");
// }else{
//     console.log("Karoi Biyer Boyosh Hoy Nai");
// }

if( ( age >= 21 && gender === "Male") || ( age >= 18 && gender === "Female") ){
    console.log("Biyer Boyosh Hoyeche");
}else{
    console.log("Biyer Boyosh Hoy Nai");
}