const tasks = document.getElementById("tasks");
const inputB = document.getElementById("task");
const btnAdd = document.getElementById("add-task");

// Clear btn
const clearBtn = document.querySelector(".bi-trash3");

clearBtn.style.display = "none";

inputB.addEventListener("input", ()=>{
    if(inputB.value == ""){
        clearBtn.style.display = "none";
    }
    else{
        clearBtn.style.display = "flex";
    }
});



let error1 = document.createElement("div");
error1.className = "showError";
error1.innerHTML = "Your Task is empty!";

let count = 1;
btnAdd.addEventListener("click", function(){
    if(inputB.value == "") {
        tasks.prepend(error1);
    }
    else{
        error1.remove();
        let card = document.createElement("div");
        
        card.className = "card";
        card.innerHTML = `${count}. ` + inputB.value;
        count++;
        tasks.append(card);
        inputB.value = "";
        clearBtn.style.display = "none";
    }
});

clearBtn.addEventListener("click", ()=>{
    inputB.value = "";
    clearBtn.style.display = "none";
});