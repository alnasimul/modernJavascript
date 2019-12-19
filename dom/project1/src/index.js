var inp = document.querySelector('.taskname');
var list = document.querySelector('.list');
var taskList = [];
//['get up','khawa dawa'];

inp.addEventListener('keyup', e=>{
    if(e.which === 13 && inp.value !== ""){
        taskList.push(inp.value);
        inp.value = "";
        render(taskList);
    }
});

function render(elements){
    list.innerHTML = "";
    elements.forEach(e => {
        var newEl = document.createElement('li');
        newEl.innerHTML = e;
        list.appendChild(newEl);
    });
}