var input = document.querySelector("input");
var addBtn = document.querySelector(".add-button");
var list = document.querySelector("ul");
var errorMsg = document.querySelector(".error-message");
var clearButton = document.querySelector(".clear-btn");
var form= document.querySelector("form")
var counter=0;
var count= document.querySelector("sup")
input.addEventListener("keyup" , function(e){
    if (e.target.value.length<3 || e.target.value.trim() == "") {
      errorMsg.style.display= "inline";
      addBtn.setAttribute("disabled","");       
    }
    else{
        errorMsg.style.display= "none";
        addBtn.removeAttribute("disabled",""); 
    }

});



addBtn.addEventListener("click", function(a){
    a.preventDefault();
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("justify-content-between");
    listItem.classList.add("align-items-center");
    let todo = document.createElement("span");
    todo.classList.add("lead");
    todo.textContent = input.value;
    counter++;
    count.textContent=`${counter}`
    input.value =""
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.classList.add("mx-1");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`
    let doneButton = document.createElement("button");
    doneButton.classList.add("btn");
    doneButton.classList.add("btn-info");
    doneButton.classList.add("mx-1");
    doneButton.innerHTML = `<i class="fa-solid fa-check"></i>`
    let editButton =document.createElement("button");
    editButton.classList.add("btn");
    editButton.classList.add("btn-primary");
    editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
    let btnWrapper = document.createElement("div");
    btnWrapper.classList.add("d-flex")
    btnWrapper.append(deleteButton, doneButton, editButton)
    listItem.append(todo, btnWrapper );
    list.append(listItem);
    clearButton.removeAttribute("disabled","")

    deleteButton.addEventListener("click", function(){
        deleteButton.parentElement.parentElement.remove();
        counter--;
        count.textContent=`${counter}`;
    })
    
    doneButton.addEventListener("click", function(){
        todo.style.textDecoration = "line-through"
    })

    editButton.addEventListener("click", function () {
        editButton.setAttribute("disabled","");
        deleteButton.setAttribute("disabled","");
        doneButton.setAttribute("disabled","");
        clearButton.setAttribute("disabled","");
        addBtn.setAttribute("disabled","");
        let updateButton= document.createElement("button")
        updateButton.classList.add("btn");
        updateButton.classList.add("btn-primary");
        updateButton.innerHTML=`<i class="fa-solid fa-pen"></i>`
        form.append(updateButton)
        input.value= todo.textContent;
         if (input.value.length<3 || input.value.trim() == "") {        
            updateButton.setAttribute("disabled","");
         }
        updateButton.addEventListener("click", function (a) {
            a.preventDefault();
            todo.textContent=input.value
            input.value="";
            editButton.removeAttribute("disabled","");
            deleteButton.removeAttribute("disabled","");
            doneButton.removeAttribute("disabled","");
            clearButton.removeAttribute("disabled","");
            addBtn.removeAttribute("disabled","");
        })
    })
    

    
})

clearButton.addEventListener("click", function () {
    list.remove();
    counter=0;
    count.textContent=`${counter}`;
})





