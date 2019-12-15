var target = document.querySelector(".result");

function clock(){
    var d = new Date();

    target.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}



setInterval(clock,1000);