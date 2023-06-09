interface ToDo {
    text: string,
    completed: boolean
}

// Adding a random comment

const btn = document.getElementById("btn")! // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo") as HTMLInputElement;
const form = document.querySelector("form");
const list = document.getElementById("todolist")!

const todos: ToDo[] =readToDos()
todos.forEach(createToDo)

function saveToDos(){
    localStorage.setItem("localToDos", JSON.stringify(todos));
}
function readToDos(): ToDo[]{
    const jsonStrToDo = localStorage.getItem("localToDos")
    if (jsonStrToDo === null) return []
    return JSON.parse(jsonStrToDo)
}


function handleFormSubmit(e: SubmitEvent){
    e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
    console.log("Form SUBMITTED!");
    const newToDo: ToDo ={
        text: inputBox.value,
        completed: false
    }
    todos.push(newToDo)
    createToDo(newToDo)
    saveToDos();
    inputBox.value="";

}

function createToDo(todo: ToDo){
    const newLI = document.createElement("li");
    const newCheckBox = document.createElement("input");
    newCheckBox.type="Checkbox";
    newCheckBox.checked = todo.completed;
    newCheckBox.addEventListener("change", () => {
        todo.completed = newCheckBox.checked;
        saveToDos();
    });
    newLI.append(newCheckBox);
    newLI.append(todo.text)
    list.append(newLI)
}

form?.addEventListener("submit", handleFormSubmit);

