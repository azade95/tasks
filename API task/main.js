let API_URL = "https://restcountries.com/v3.1/all";
let row = document.querySelector(".row");

fetch(API_URL).then(response => response.json())
.then(data => {
    let countries=["Germany" , "United States", "Brazil", "Iceland", "Afghanistan", "New Zealand", "Albania", "Algeria"]
    for (let i = 0; i < data.length; i++) {
        for (let index = 0; index < countries.length; index++) {
            if (data[i].name.common==countries[index]){

                row.innerHTML+=`<div class="col-3">
                <a class="text-decoration-none text-dark" href="detail.html">
                <div class="card mb-3 " style="width: 18rem; height: 24rem;">
               <img class="card-img-top" src="${data[i].flags.png}" alt="Card image cap" style=" height: 12rem;">
               <div class="card-body">
                 <h5 class="card-title">${data[i].name.common}</h5>
                 <p><b>Population:</b> ${data[i].population}</p>
                 <p><b>Region:</b> ${data[i].region}</p>
                 <p><b>Capital:</b> ${data[i].capital}</p>
               </div>
              </div>
                </a>
              </div>`
            }
            
        }

        
        
    }
})

let modeBtn= document.querySelector(".mode-button");
let body=document.querySelector("body");
let navbar = document.querySelector("nav")
let card= document.querySelector(".card")
let searchInput= document.querySelector("input")
let navBrand= document.querySelector(".navbar-brand")
modeBtn.addEventListener("click", function (a) {
    a.preventDefault();
    body.classList.add("dark-mode-bg");
    navbar.classList.add("nav-dark-bg");
    navBrand.classList.add("text-white");
    searchInput.classList.add("nav-dark-bg");
    searchInput.classList.add("text-white");
    // card.classList.add("card-dark-bg");
});

// input search
searchInput.addEventListener("keyup",function () {
    fetch(API_URL).then(response => response.json())
    .then(data => {
    row.innerHTML="";
    for (let j = 0; j < data.length; j++) {
        if (data[i].name.common.includes(searchInput.value)) {
            if (countries[index].includes(searchInput.value)){

                row.innerHTML+=`<div class="col-3">
                <div class="card mb-3 " style="width: 18rem; height: 24rem;">
               <img class="card-img-top" src="${data[i].flags.png}" alt="Card image cap" style=" height: 12rem;">
               <div class="card-body">
                 <h5 class="card-title">${data[i].name.common}</h5>
                 <p><b>Population:</b> ${data[i].population}</p>
                 <p><b>Region:</b> ${data[i].region}</p>
                 <p><b>Capital:</b> ${data[i].capital}</p>
               </div>
              </div>
              </div>`
            }
        }
        
    }
})
    
})