
var toggleOn =document.querySelector('.dark_mode');
function setMode(){
    document.body.classList.toggle("dark");
    if(document.body.classList.toggle === "dark"){
        toggleOn.src = "/toggle-1/png-48/toggle-48x48-1514132.png"
}else{
    "./toggle-1/png-48/toggle-48x48-1514133.png"
}
}
console.log(1+2);
function animateServices(){
    var element = document.getElementById('services_scroll');
    element.scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}
function animateAbout(){
    var element = document.getElementById('about');
    element.scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}
function animateHome(){
    var element = document.getElementById('section');
    element.scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}
function animateContact(){
    var element = document.getElementById('contacts');
    element.scrollIntoView({
        behavior: "smooth",
        block:"start"
    });
}
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
    let pictures =[  "pica.jpg","picb.jpg", "picc.jpg" ];
img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);
