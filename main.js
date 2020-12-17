let getTime = () => {
    let clock = document.getElementById('js-clock');

    let date  = new Date();

    let hour = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let string = hour+":"+min+":"+sec;

    clock.innerHTML = string;

}

let main = () => {
    getTime();
    setInterval(getTime,1000);
}

main();

