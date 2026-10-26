const cartContainer = document.getElementById("card-container");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

cart.forEach(product => {

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = "product-img";

    const title = document.createElement("h1");
    title.innerText = product.title;

    const price = document.createElement("h2");
    price.innerText = product.price;

    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);

    cartContainer.appendChild(div);
});