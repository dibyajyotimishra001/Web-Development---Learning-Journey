const searchBox = document.getElementById("search-box");
const cards = document.getElementsByClassName("card");

searchBox.addEventListener("input", function(){
    let query = searchBox.value.toLowerCase();

    for(let i = 0; i < cards.length; i++){
        let cardText = cards[i].innerText.toLowerCase();

        if(cardText.includes(query)){
            cards[i].style.display = "flex";
        }
        else{
            cards[i].style.display = "none";
        }
    }
});

const darkMood = document.querySelector(".bi-moon");


darkMood.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});