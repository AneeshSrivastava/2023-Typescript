const btn = document.getElementById("btn")! // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist")!

function handleFormSubmit(e: SubmitEvent){
    e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
    console.log("Form SUBMITTED!");
    const newTodoText = inputBox.value;
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input");
    newCheckBox.type="Checkbox";
    newLI.append(newCheckBox);
    newLI.append(newTodoText)
    list.append(newLI)
    inputBox.value="";

}

form?.addEventListener("submit", handleFormSubmit);

