// Change background color when button is clicked
const changeColorBtn = document.getElementById("changeColorBtn");
changeColorBtn.addEventListener("click", () => {
    const colors = ["#f5f5f5", "#ffe6e6", "#e6ffe6", "#e6f0ff", "#fff0e6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Say hi to the user
const sayHiBtn = document.getElementById("sayHiBtn");
sayHiBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    if (name.trim() === "") {
        greeting.textContent = "Hello, stranger!";
    } else {
        greeting.textContent = `Hello, ${name}!`;
    }
});
