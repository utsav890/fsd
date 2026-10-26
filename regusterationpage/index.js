const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const innerdiv = document.createElement("div");
    console.log("Name:", name.value);
    console.log("Email:", email.value);
    console.log("Password:", password.value);
});