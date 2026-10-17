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

let space1 = uname.indexOf(" ");
let fname = uname.slice(0, space1)

names.classList.add('namesec');

names.innerHTML = `<p style="font-size: 55px"><b>Well done </b>${fname}, <p>\n<b>Name:</b> ${uname}\n<b>Completed Course:</b> ${course.toUpperCase()} Course\n<b>Batch:</b> ${jYear} - ${cYear}\n`;
names.style.color = "white";

names.style.whiteSpace = "pre-line";

certificate.append(names);