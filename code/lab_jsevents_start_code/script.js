//Get current time
const date = document.createElement("button");
date.innerText = "Show Date"
const datediv = document.querySelector("#datediv")
datediv.appendChild(date);
const para = document.createElement("p")
datediv.appendChild(para)


date.addEventListener("click", (e) =>{
    para.innerHTML = Date();
})

// Create new task
const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const input = document.querySelector("#new-todo");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // console.log(e.target["new-todo"].value); 
    
    // create new task
    const newListItem = document.createElement("li");
    newListItem.innerText = e.target["new-todo"].value;
    list.appendChild(newListItem);
    
    // add delete button to task
    const btn = document.createElement("button");
    btn.innerText = "delete"
    list.appendChild(btn);

    btn.addEventListener("click", (e) =>{
        newListItem.remove();
        btn.remove();
    })
});

