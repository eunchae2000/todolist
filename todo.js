const toDoForm = document.querySelector(".js-todoform");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-todolist");

const TODO_LS = "toDo";

let toDo = [];

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function saveToDo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDo = toDo.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDo = cleanToDo;
    saveToDo();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDo.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;


    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    };
    toDo.push(toDoObj);
    saveToDo();
}

function loadName(){
    const loadToDo = localStorage.getItem(TODO_LS);
    if(loadToDo !== null){
        const parsedToDo = JSON.parse(loadToDo);
        parsedToDo.forEach(function(toDo){
            paintToDo(toDo.text);    
        });
    } 
}

function init(){
    loadName();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
