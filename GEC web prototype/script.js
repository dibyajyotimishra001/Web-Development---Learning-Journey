// Comming soon features
const notices = document.querySelector(".sec2");
const result = document.querySelector(".sec3");
const notice = document.querySelector(".notices");

let show = document.createElement("div");
show.classList.add("show-box");
show.innerHTML = "Comming soon";

notices.addEventListener("click", ()=>{
    if(!notice.contains(show)){
        notice.prepend(show);
    }
    else{
        show.remove();
    }
});
result.addEventListener("click", ()=>{
    if(!notice.contains(show)){
        notice.prepend(show);
    }
    else{
        show.remove();
    }
});

// Dark mode
const moon = document.querySelector(".bi-moon");

let currentColor = localStorage.getItem("theme");

if(currentColor == "enabled"){
    document.body.classList.add("dark");
}
moon.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "enabled");
    }
    else{
        localStorage.setItem("theme", "disabled");
    }
});