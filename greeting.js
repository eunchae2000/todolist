const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const USER_LS = "user";
const SHOWING_CN = "showing";

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`

}

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const user = localStorage.getItem(USER_LS);
    if(user === null){
        askForName();
    }
    else{
        paintGreeting(user);
    }
}

function init(){
    loadName();
}

init();