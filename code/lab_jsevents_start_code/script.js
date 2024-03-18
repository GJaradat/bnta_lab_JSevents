const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const input = document.querySelector("#new-todo");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // console.log(e.target["new-todo"].value); 
    const newListItem = document.createElement("li");
    newListItem.innerText = e.target["new-todo"].value;
    list.appendChild(newListItem);
    const btn = document.createElement("button");
    btn.innerText = "delete"
    list.appendChild(btn);
});

btn.addEventListener("click", (e) =>{})