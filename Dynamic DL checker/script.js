/*
parseInt("78.6")  // 78
Math.trunc(78.6)   // 78
Math.floor(78.6)   // 78
Math.round(78.6)   // 79

*/


const invalidAge = document.getElementById("notAge");
const less16 = document.getElementById("less16");
const is16 = document.getElementById("is16");
const is18 = document.getElementById("is18");
const greater20 = document.getElementById("greater20");
const oldage = document.getElementById("oldage");

const subBtn = document.getElementById("submit");

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        subBtn.click();
    }
});

subBtn.addEventListener("click", ()=>{
    let age = parseInt(document.getElementById("age").value);

    if(isNaN(age) || age < 0 || age > 120){
        invalidAge.style.display = "flex";
    }
    else{
        invalidAge.style.display = "none";
    }
    if(age < 16 && age > 0){
        less16.style.display = "flex";
    }
    else{
        less16.style.display = "none";
    }
    if(age < 18 && age >= 16){
        is16.style.display = "flex";
    }
    else{
        is16.style.display = "none";
    }
    if(age < 20 && age >= 18){
        is18.style.display = "flex";
    }
    else{
        is18.style.display = "none";
    }
    if(age < 65 && age >= 20){
        greater20.style.display = "flex";
    }
    else{
        greater20.style.display = "none";
    }
    if(age >= 65 && age <= 120){
        oldage.style.display = "flex";
    }
    else{
        oldage.style.display = "none";
    }
});