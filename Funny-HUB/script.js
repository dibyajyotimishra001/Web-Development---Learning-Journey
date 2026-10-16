// Dark mode
const moon = document.querySelector(".dark");

let currentTheme = localStorage.getItem("theme");
if(currentTheme == "enabled"){
    document.body.classList.add("darken");
}

moon.addEventListener("click", function(){
    document.body.classList.toggle("darken");

    if(document.body.classList.contains("darken"))
        localStorage.setItem("theme", "enabled");
    else
        localStorage.setItem("theme", "disabled");
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const lines = document.getElementsByClassName("line");
const sidebar = document.querySelector(".sidebar");

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle("active");
    
    for(let i = 0; i < lines.length; i++){
        lines[i].classList.toggle("active");
    }

    sidebar.classList.toggle("active");
});

// editing
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const weight = document.getElementById("weight");
const color = document.getElementById("color");


let fontsize = 14;
increase.addEventListener("click", ()=>{
    const textContent = document.getElementById("textarea");
    fontsize += 10;
    textContent.style.fontSize = fontsize + "px";

});
decrease.addEventListener("click", ()=>{
    const textContent = document.getElementById("textarea");
    fontsize -= 10;
    textContent.style.fontSize = fontsize + "px";

});
let fontweight = 400;
weight.addEventListener("click", ()=>{
    const textContent = document.getElementById("textarea");
    fontweight = Math.min(fontweight + 100, 900);
    textContent.style.fontWeight = fontweight;
});

const colorBox = document.querySelector(".color-sec");
const colours = document.getElementsByClassName("colour");

color.addEventListener("click", ()=>{
    colorBox.classList.toggle("active");

});
for(let i = 0; i < colours.length; i++){
    colours[i].addEventListener("click", function(){
        const textContent = document.getElementById("textarea");
        textContent.style.color = getComputedStyle(colours[i]).backgroundColor;
    });
}