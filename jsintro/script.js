let studentName = document.querySelector("#name1");
let studentSurname = document.querySelector("#surname");
let studentAge = document.querySelector("#age");
let studentEmail = document.querySelector("#email");
let button = document.querySelector("button");
let tbody= document.querySelector("tbody");
let gender= document.querySelectorAll(".form-check-input")


button.addEventListener("click", function (a) {
     a.preventDefault();
    let genderValue = ""
    for (const i of gender) {
        if (i.checked) {
            genderValue=i.value
        }
        
    }
    tbody.innerHTML += `<tr>
    <td>${studentName.value}</td>
    <td>${studentSurname.value}</td>
    <td>${studentAge.value}</td>
    <td>${genderValue}</td>
    <td>${studentEmail.value}</td>
    </tr>`
    studentName.value ="";
    studentSurname.value = ""
    studentAge.value ="";
    genderValue = "";
    studentEmail.value = "";

})
// console.log(gender);