"use strict";
const btn = document.getElementById("btn"); // Type of btn is HTMLElement or null
const inputBox = document.getElementById("todo");
const form = document.querySelector("form");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault(); // Default behavior of JS is to clear the form post submission, so we prevent that
    console.log("Form SUBMITTED!");
    inputBox.value = "";
});
