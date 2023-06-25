const btn = document.getElementById("btn") // Type of btn is HTMLElement or null
console.log(btn);

console.log("Hello!".replaceAll('!', '')); // replaceAll() method is only available post EX2021
btn?.addEventListener("click", () => {
    alert("btn is clicked!")
})

// Type assertion with DOM elements 
const toDoInput = document.getElementById("todo") as HTMLInputElement; // Type Assertion
const btn2 = document.getElementById("btn2")!;

btn2.addEventListener("click", () => {
    alert(toDoInput.value) // No need to check for null
    toDoInput.value="" // Reset the value of input box after clicking!
});
