const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();

    const hours = date.getHours();
    const minuets = date.getMinutes();
    const seconds = date.getSeconds();

    clockContainer.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minuets < 10 ? `0${minuets}` : minuets} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();