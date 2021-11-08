var a1 = document.querySelector(".event .card-1 .btn .slide .up");
var b1 = document.querySelector(".event .card-1 .btn .slide .down");
var c1 = document.querySelector(".event .card-1 .content");
var d1 = document.querySelector(".event .card-1 .heading");
var e1 = document.querySelector(".event .card-1 .image img");
var f1 = document.querySelector(".event .card-1 .heading h4");
var g1 = document.querySelector(".event .card-1 .content p");

var a2 = document.querySelector(".event .card-2 .btn .slide .up");
var b2 = document.querySelector(".event .card-2 .btn .slide .down");
var c2 = document.querySelector(".event .card-2 .content");
var d2 = document.querySelector(".event .card-2 .heading");
var e2 = document.querySelector(".event .card-2 .image img");
var f2 = document.querySelector(".event .card-2 .heading h4");
var g2 = document.querySelector(".event .card-2 .content p");


a1.addEventListener("click",function(){
    c1.style.top = "10%";
    a1.style.visibility = "hidden";
    e1.style.filter = "brightness(0)";
    b1.style.visibility = "visible";
    d1.classList.add("effect");
    f1.style.color = "white";
    // d1.style.top = "0%";
    g1.style.marginTop = "2rem";
})

b1.addEventListener("click",function(){
    c1.style.top = "60%";
    a1.style.visibility = "visible";
    e1.style.filter = "brightness(100%)";
    b1.style.visibility = "hidden";
    d1.classList.remove("effect");
    // d1.style.top = "-10%";
    f1.style.color = "black";
    g1.style.marginTop = "0rem";
})

a2.addEventListener("click",function(){
    c2.style.top = "10%";
    a2.style.visibility = "hidden";
    e2.style.filter = "brightness(0)";
    b2.style.visibility = "visible";
    d2.classList.add("effect");
    // d2.style.top = "0%";
    f2.style.color = "white";
    g2.style.marginTop = "2rem";
})

b2.addEventListener("click",function(){
    c2.style.top = "60%";
    a2.style.visibility = "visible";
    e2.style.filter = "brightness(100%)";
    b2.style.visibility = "hidden";
    d2.classList.remove("effect");
    // d2.style.top = "-10%";
    f2.style.color = "black";
    g2.style.marginTop = "0rem";
})
