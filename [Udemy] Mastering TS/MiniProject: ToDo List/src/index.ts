const btn = document.getElementById("btn")! // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo") as HTMLInputElement;
const form = document.querySelector("form");

form?.addEventListener("submit", (e) => { // e is assumed as "SubmitEvent" by Typescript
   e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
   console.log("Form SUBMITTED!");
   inputBox.value="";
});

