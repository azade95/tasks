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


let container = document.querySelector(".container")
fetch(API_URL).then(response => response.json())
.then(data => {
    let countries=["Germany" , "United States", "Brazil", "Iceland", "Afghanistan", "New Zealand", "Albania", "Algeria"]
    for (let i = 0; i < data.length; i++) {
        for (let index = 0; index < countries.length; index++) {
            if (data[i].name.common==countries[0]){

                container.innerHTML+=` <div class="row">
                <div class="col-6">
                    <img src="${data[i].flags.png}" >
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <h2>${data[i].name.common}</h2>
                            <ul>
                                <li><b>Native name</b></li>
                                <li><b>Population</b>${data[i].population}</li>
                                <li><b>Region</b>${data[i].region}</li>
                                <li><b>Sub region</b>${data[i].subregion}</li>
                                <li><b>Capital</b> ${data[i].capital}</li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul>
                                <li><b>Top level domain</b></li>
                                <li><b>Currencies</b></li>
                                <li><b>Languages</b></li>
                            </ul>
                        </div>

                        <p><b>Border countries:</b> </p>
                    </div>
                </div>
            </div>`
            }
            
        }

        
        
    }
})