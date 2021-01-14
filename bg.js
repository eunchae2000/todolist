const body = document.querySelector("body");

const IMG_NUMBER = 10;

function paintBackGround(imgNum){
    const image = new Image();
    image.src =  `C:/Users/coco1/DEV/html_css_js/todolist/background/${imgNum + 1}.jpg`;
    image.classList.add("beimage");
    body.prepend(image);
}

function imgRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = imgRandom();
    paintBackGround(randomNumber);
}

init();