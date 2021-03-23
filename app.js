// Nav Start.
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav.
    burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');

    // Animate Links.
    navLinks.forEach((link, index) => {
        
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }});
    
    //Burger Animation.
    burger.classList.toggle('toggle');});
}

navSlide();
//Nav end.

// HomePage - index.html.
// Text Animation Hi, my name is.
const text = document.documentElement.querySelector('#hello');
const strText = text.textContent;
const splitText = strText.split('');

text.textContent = "";

for(let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText [i] + "</span";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer)
    timer = null;
}
// Jake Zourelias Animation

const nameText = document.documentElement.querySelector('#name');
const nameStr = nameText.textContent;
const nameSplit = nameStr.split('');
nameText.textContent = "";


for(let i = 0; i < nameSplit.length; i++){
    nameText.innerHTML += "<span>" + nameSplit [i] + "</span";
}

let character = 0;
let theTime = setInterval(onclick,50);

function onclick(){
    const span = nameText.querySelectorAll('span')[character];
    span.classList.add('onFade');
    character++
    if(character === nameSplit.length){
        finish();
        return;
    }
}
function finish(){
    clearInterval(theTime)
    theTime = null;
}

// Text Animation Web Designer & Developer based in Pittsburgh, Pennsylvania.
const doText = document.documentElement.querySelector('#do');
const strDo = doText.textContent;
const splitDo = strDo.split('');
doText.textContent = "";

for(let i = 0; i < splitDo.length; i++){
    doText.innerHTML += "<span>" + splitDo [i] + "</span";
}

let doChar = 0;
let doTimer = setInterval(onDo,50);

function onDo(){
    const span = doText.querySelectorAll('span')[doChar];
    span.classList.add('doFade');
    doChar++
    if(doChar === splitDo.length){
        doIt();
        return;
    }
}
function doIt(){
    clearInterval(doTimer)
    doTimer = null;
}
// HomePage - index.html end.

// Resume -resume.html
function myEmail() {
    document.getElementById("resEmail").innerHTML = "jaz66@pitt.edu";
}
function myPhone() {
    document.getElementById("resPhone").innerHTML = "724-594-3341";

}








