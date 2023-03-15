let body= document.querySelector("body");
let container=document.createElement("div");
container.classList.add("container");
container.classList.add("my-2");
body.append(container)
let rowdiv1= document.createElement("div");
rowdiv1.classList.add("row");
rowdiv1.classList.add("bg-dark");
rowdiv1.classList.add("text-white");
rowdiv1.classList.add("justify-content-center");
rowdiv1.classList.add("align-items-center");
rowdiv1.innerHTML= "1120x360px"
container.append(rowdiv1);

let rowdiv2= document.createElement("div");
rowdiv2.classList.add("row");
rowdiv2.classList.add("my-4");
container.append(rowdiv2);
// card1
let card=document.createElement("div");
card.classList.add("card");
card.classList.add("col-4");
rowdiv2.append(card);
let image=document.createElement("div");
image.classList.add("card-img-top");
image.classList.add("bg-dark");
image.classList.add("text-light");
image.classList.add("text-center");
image.textContent="290x180px"
let cardBody= document.createElement("div");
cardBody.classList.add("card-body");
card.append(image, cardBody);
let cardTitle=document.createElement("h5");
cardTitle.classList.add("text-secondary");
cardTitle.innerHTML="<em>Indonectetus facilis</em>";
let cardText=document.createElement("p");
cardText.classList.add("text-secondary");
cardText.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, fugiat accusantium."
let link= document.createElement("a");
link.classList.add("card-link");
link.classList.add("text-warning");
link.classList.add("text-decoration-none");
link.textContent="Read More>>"
cardBody.append(cardTitle, cardText, link);

// card2
let card2=document.createElement("div");
card2.classList.add("card");
card2.classList.add("col-4");
rowdiv2.append(card2);
let image2=document.createElement("div");
image2.classList.add("card-img-top");
image2.classList.add("bg-dark");
image2.classList.add("text-light");
image2.classList.add("text-center");
image2.textContent="290x180px"
let cardBody2= document.createElement("div");
cardBody2.classList.add("card-body");
card2.append(image2, cardBody2);
let cardTitle2=document.createElement("h5");
cardTitle2.classList.add("text-secondary");
cardTitle2.innerHTML="<em>Indonectetus facilis</em>";
let cardText2=document.createElement("p");
cardText2.classList.add("text-secondary");
cardText2.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, fugiat accusantium."
let link2= document.createElement("a");
link2.classList.add("card-link");
link2.classList.add("text-warning");
link2.classList.add("text-decoration-none");
link2.textContent="Read More>>"
cardBody2.append(cardTitle2, cardText2, link2);

 // card3

let card3=document.createElement("div");
card3.classList.add("card");
card3.classList.add("col-4");
rowdiv2.append(card3);
let image3=document.createElement("div");
image3.classList.add("card-img-top");
image3.classList.add("bg-dark");
image3.classList.add("text-light");
image3.classList.add("text-center");
image3.textContent="290x180px"
let cardBody3= document.createElement("div");
cardBody3.classList.add("card-body");
card3.append(image3, cardBody3);
let cardTitle3=document.createElement("h5");
cardTitle3.classList.add("text-secondary");
cardTitle3.innerHTML="<em>Indonectetus facilis</em>";
let cardText3=document.createElement("p");
cardText3.classList.add("text-secondary");
cardText3.textContent="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, fugiat accusantium."
let link3= document.createElement("a");
link3.classList.add("card-link");
link3.classList.add("text-warning");
link3.classList.add("text-decoration-none");
link3.textContent="Read More>>"
cardBody3.append(cardTitle3, cardText3, link3);


