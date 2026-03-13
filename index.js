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
}
