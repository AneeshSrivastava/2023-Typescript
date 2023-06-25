interface ToDo {
    text: string,
    completed: boolean
}
const todos: ToDo[] =[]

const btn = document.getElementById("btn")! // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist")!

function handleFormSubmit(e: SubmitEvent){
    e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
    console.log("Form SUBMITTED!");
    const newToDo: ToDo ={
        text: inputBox.value,
        completed: false
    }
    todos.push(newToDo)
    createToDo(newToDo)
    inputBox.value="";

}

function createToDo(todo: ToDo){
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input");
    newCheckBox.type="Checkbox";
    newLI.append(newCheckBox);
    newLI.append(todo.text)
    list.append(newLI)
}

form?.addEventListener("submit", handleFormSubmit);

