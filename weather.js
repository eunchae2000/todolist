
const weather = document.querySelector(".js-weather");
const API = "8389cde55682e09ee5d44e84bc24cf2b";
const COORDS = "coords";

function saveWeather(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleSucces(position){
    const latitude = position.coords.latitude;
    const longtitude = position.coords.longtitude;
    const coords = {
        latitude : latitude,
        longtitude : longtitude
    };
    saveWeather(coords);
    getWeather(latitude, longtitude);
}

function handleError(){
    console.log("Can't access geo locaion.");
}

function askWeather(){
    navigator.geolocation.getCurrentPosition(handleSucces, handleError);
}

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API}`
        ).then(function(respone){
        return respone.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature}ºc / ${place}`;
    });
}

function loadWeather(){
    const loadcoords = localStorage.getItem(COORDS);
    if(loadcoords == null){
        askWeather();
    }
    else{
        const parsedWeather = JSON.stringify(loadcoords);
        getWeather(parsedWeather.latitude, parsedWeather.longtitude);
    }
}

function init(){
    loadWeather();
}

init();

