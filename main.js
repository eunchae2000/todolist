let clock = document.getElementById('js-clock');

let getTime = () => {
    let date  = new Date();

    let hour = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let string = hour+":"+min+":"+sec;

    clock.innerHTML = string;

}
getTime();
setInterval(getTime,1000);

