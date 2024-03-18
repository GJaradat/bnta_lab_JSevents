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
const completedList = document.querySelector("#completedList");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // console.log(e.target["new-todo"].value); 
    
    // create new task
    const newListItem = document.createElement("li");
    newListItem.innerText = e.target["new-todo"].value;
    list.appendChild(newListItem);
    
    // add delete button to task
    const btn = document.createElement("button");
    btn.innerHTML = "\u{1F5D1}";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    newListItem.appendChild(btn);

    // each button has a listener for deleting the entry
    btn.addEventListener("click", (e) =>{
        newListItem.remove();
    })
    btn.addEventListener("mouseover", (e) =>{
        btn.style.fontSize = "20px"
    })
    btn.addEventListener("mouseleave", (e) =>{
        btn.style.fontSize = "10px"
    })

    // add a checkbox for completing tasks
    const check_input = document.createElement("input")
    check_input.type = "checkbox";
    newListItem.append(check_input);

    // Change task to green if completed
    check_input.addEventListener("change", (e) => {
        if (check_input.checked){
            newListItem.style.color = "green";
            completedList.appendChild(newListItem)
        } else {
            newListItem.style.color = "black";
            list.appendChild(newListItem);
        }    
    });

});

