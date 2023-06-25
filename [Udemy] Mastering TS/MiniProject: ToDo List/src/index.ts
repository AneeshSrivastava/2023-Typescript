const btn = document.getElementById("btn")
console.log(btn);

console.log("Hello!".replaceAll('!', '')); // replaceAll() method is only available post EX2021

const btn2 = document.getElementById("btn2")!

btn2.addEventListener("click", () => {
    alert("btn2 is clicked!")
})