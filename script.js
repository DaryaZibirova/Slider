//Slide
var count = document.getElementById("images").childElementCount;
var slides = document.getElementById("images");
let arrPlus = [];
for (let i = 0; i < count; i++) {
    arrPlus[i] = i*100+"%";
}
arrPlus[0] = "";
let arrMinus = [];
for (let i = 0; i < count; i++) {
    arrMinus[i] = i*(-100)+"%";
}
arrMinus[0] = "";

function btnLeft(){
    if(slides.style.left === arrPlus[0]){
        slides.style.left = arrMinus[arrMinus.length-1];
    }else {
        for (let i = 0; i < count; i++) {
            if(slides.style.left === arrPlus[i]){
                slides.style.left = arrPlus[i+1];
                break;
            }else if(slides.style.left === arrMinus[i]){
                slides.style.left = arrMinus[i-1];
                break;
            }
        }
    }
    test();
    clearInterval(timer);
    timer = setInterval(btnRight,4000);
}

function btnRight(){
    if(slides.style.left === arrMinus[arrMinus.length-1]){
        slides.style.left = arrPlus[0];
    }else {
        for (let i = 0; i < count; i++) {
            if(slides.style.left === arrMinus[i]){
                slides.style.left = arrMinus[i+1];
                break;
            }else if(slides.style.left === arrPlus[i]){
                slides.style.left = arrPlus[i-1];
                break;
            }
        }
    }
    test();
    clearInterval(timer);
    timer = setInterval(btnRight,4000);
}

var timer = setInterval(btnRight,4000);

//Text information
var txt1 = document.querySelector(".txt1");
var txt2 = document.querySelector(".txt2");
var txt3 = document.querySelector(".txt3");
var txt4 = document.querySelector(".txt4");

// Rostov-on-Don, Admiral
var admiral_txt1 = "Rostov-on-Don <br> LCD admiral";
var admiral_txt2 = "3.5 months";
var admiral_txt3 = "81 m2";
var admiral_txt4 = "Upon request";
// Sochi Thieves
var sochi_txt1 = "Sochi <br> Thieves";
var sochi_txt2 = "4 months";
var sochi_txt3 = "105 m2";
var sochi_txt4 = "Upon request";
// Rostov-on-Don, Patriotic
var patriotic_txt1 = "Rostov-on-Don <br> Patriotic";
var patriotic_txt2 = "3 months";
var patriotic_txt3 = "93 m2";
var patriotic_txt4 = "Upon request";

function admiral(){
    txt1.innerHTML = admiral_txt1;
    txt2.innerHTML = admiral_txt2;
    txt3.innerHTML = admiral_txt3;
    document.querySelector(".admiral").style.color = "#E3B873";
    document.querySelector(".admiral").style.borderColor = "#E3B873";
    document.querySelector(".sochi").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".sochi").style.borderColor = "transparent";
    document.querySelector(".patriotic").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".patriotic").style.borderColor = "transparent";
}
function sochi(){
    txt1.innerHTML = sochi_txt1;
    txt2.innerHTML = sochi_txt2;
    txt3.innerHTML = sochi_txt3;
    document.querySelector(".sochi").style.color = "#E3B873";
    document.querySelector(".sochi").style.borderColor = "#E3B873";
    document.querySelector(".admiral").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".admiral").style.borderColor = "transparent";
    document.querySelector(".patriotic").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".patriotic").style.borderColor = "transparent";
}
function patriotic(){
    txt1.innerHTML = patriotic_txt1;
    txt2.innerHTML = patriotic_txt2;
    txt3.innerHTML = patriotic_txt3;
    document.querySelector(".patriotic").style.color = "#E3B873";
    document.querySelector(".patriotic").style.borderColor = "#E3B873";
    document.querySelector(".admiral").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".admiral").style.borderColor = "transparent";
    document.querySelector(".sochi").style.color = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".sochi").style.borderColor = "transparent";
}

function circle1(){
    document.querySelector(".circle1").style.background = "#FFFFFF";
    document.querySelector(".circle2").style.background = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".circle3").style.background = "rgba(255, 255, 255, 0.3)";
}
function circle2(){
    document.querySelector(".circle2").style.background = "#FFFFFF";
    document.querySelector(".circle1").style.background = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".circle3").style.background = "rgba(255, 255, 255, 0.3)";
}
function circle3(){
    document.querySelector(".circle3").style.background = "#FFFFFF";
    document.querySelector(".circle1").style.background = "rgba(255, 255, 255, 0.3)";
    document.querySelector(".circle2").style.background = "rgba(255, 255, 255, 0.3)";
}

function test(){
    if(slides.style.left === ""){
        admiral();
        circle1();
    }else if(slides.style.left === "-100%"){
        sochi();
        circle2();
    }else if(slides.style.left === "-200%"){
        patriotic();
        circle3();
    }
}

function slide1(){
    slides.style.left = "";
    admiral();
    circle1();
    clearInterval(timer);
    timer = setInterval(btnRight,4000);
}
function slide2(){
    slides.style.left = "-100%";
    sochi();
    circle2();
    clearInterval(timer);
    timer = setInterval(btnRight,4000);
}
function slide3(){
    slides.style.left = "-200%";
    patriotic();
    circle3();
    clearInterval(timer);
    timer = setInterval(btnRight,4000);
}
