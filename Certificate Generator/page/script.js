const form = document.querySelector(".details");

if(form){

    form.addEventListener("submit", ()=>{
        
        const uname = document.getElementById("name");
        const jYear = document.getElementById("j-year");
        const cYear = document.getElementById("c-year");
        const course = document.querySelector('[name="courses"]');
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const gender = genderElement ? genderElement.value : "";
        
        
        localStorage.setItem("name", uname.value);
        localStorage.setItem("jyear", jYear.value);
        localStorage.setItem("cyear", cYear.value);
        localStorage.setItem("course", course.value);
        localStorage.setItem("gender", gender);
    });
}


const certificate = document.querySelector(".certificate");

let names = document.createElement("div");
const uname = localStorage.getItem("name");
const jYear = localStorage.getItem("jyear");
const cYear = localStorage.getItem("cyear");
const course = localStorage.getItem("course");
const gender = localStorage.getItem("gender");

names.classList.add('namesec');

names.innerHTML = `<p style="font-size: 35px">Well done <p>\n<b>Name:</b> ${uname}\n<b>Completed Course:</b> ${course.toUpperCase()} Course\n<b>Joining Year:</b> ${jYear}\n<b>Completion Year:</b> ${cYear}`;

names.style.whiteSpace = "pre-line";

certificate.append(names);