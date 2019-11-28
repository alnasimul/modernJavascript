var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener("click",function(){
    var c = msg.value.toLowerCase();
    let reply = "";
    if( c.match("hello")){
        reply = "Hello There !";
    }
    else if(c.match("sing for me")){
        reply = "Amar poth chola amr pothe";
    }
    else if(c.match("tomar nam ki")){
        reply = "amar nam sadaf bot";
    }
    else{
        reply = "bujhi nai";
    }
    result.innerHTML = reply;
    var kotha = new SpeechSynthesisUtterance(reply);
    window.speechSynthesis.speak(kotha);
});