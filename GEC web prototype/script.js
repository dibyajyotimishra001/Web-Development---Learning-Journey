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

// Hamburger menu
const hamburger = document.querySelector(".humburger");
const nav = document.getElementById("navlinks");
const lines = document.getElementsByClassName("line");

// lines
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

hamburger.addEventListener("click", function(){
    nav.classList.toggle("active");

    // Hamburger Animation is added
    line1.classList.toggle("active");
    line2.classList.toggle("active");
    line3.classList.toggle("active");
    hamburger.classList.toggle("active");
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

// Search Box
const searchBox = document.getElementById("serch-box");
const cards = document.getElementsByClassName("card");
const remove = document.querySelector(".bi-x-lg");

remove.style.display = "none";

searchBox.addEventListener("input", ()=>{
    let query = searchBox.value.toLowerCase().trim();


    for(let i = 0; i < cards.length; i++){
        let cardText = cards[i].innerHTML.toLowerCase().trim();

        if(cardText.includes(query)){
            cards[i].style.display = "flex";
        }
        else{
            cards[i].style.display = "none";
        }
        
    }
    remove.addEventListener("click", function(){
        if(searchBox.value != ""){
            searchBox.value = "";
            for(let i = 0; i < cards.length; i++)
                cards[i].style.display = "flex";
            remove.style.display = "none";
        }
    });

    if(searchBox.value != ""){
        remove.style.display = "flex";
    }
    else{
        remove.style.display = "none";
    }
});
