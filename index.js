const inputBox = document.querySelector(".input-text");
const addButton = document.querySelector(".btn-add");
const listContainer = document.querySelector(".list-container");

addButton.addEventListener("click", () => {
    addTask();
});

function addTask() {
    if (inputBox.value === "") {
        alert("enter your tasks first and then proceed to add the tasks");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        const span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();
