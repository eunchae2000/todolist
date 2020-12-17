let getTime = () => {
    let clock = document.getElementById('js-clock');

    let date  = new Date();

    let hour = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let string = hour+":"+min+":"+sec;

    clock.innerHTML = string;

}

let getName = () =>{
    
    let button = document.getElementById("btn");
    button.onclick = () => {
        let name = document.getElementById("inputName").value;
        document.getElementById("name").innerHTML = name;
    };

    
}

let main = () => {
    getTime();
    setInterval(getTime,1000);
    getName();
}

main();

