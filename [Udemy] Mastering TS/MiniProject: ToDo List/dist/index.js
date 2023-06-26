"use strict";
const btn = document.getElementById("btn"); // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readToDos();
todos.forEach(createToDo);
function saveToDos() {
    localStorage.setItem("localToDos", JSON.stringify(todos));
}
function readToDos() {
    const jsonStrToDo = localStorage.getItem("localToDos");
    if (jsonStrToDo === null)
        return [];
    return JSON.parse(jsonStrToDo);
}
function handleFormSubmit(e) {
    e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
    console.log("Form SUBMITTED!");
    const newToDo = {
        text: inputBox.value,
        completed: false
    };
    todos.push(newToDo);
    createToDo(newToDo);
    saveToDos();
    inputBox.value = "";
}
function createToDo(todo) {
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input");
    newCheckBox.type = "Checkbox";
    newCheckBox.checked = todo.completed;
    newCheckBox.addEventListener("change", () => {
        todo.completed = newCheckBox.checked;
        saveToDos();
    });
    newLI.append(newCheckBox);
    newLI.append(todo.text);
    list.append(newLI);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleFormSubmit);
