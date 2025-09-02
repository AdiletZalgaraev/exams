document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("cart-container");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    if (cart.length === 0) {
      container.textContent = "Your cart is empty.";
      return;
    }
  
    cart.forEach(item => {
      const card = document.createElement("div");
      card.className = "cart-item";
  
      const title = document.createElement("h3");
      title.textContent = item.title;
  
      const image = document.createElement("img");
      image.src = item.image;
      image.alt = item.title;
  
      const price = document.createElement("p");
      price.textContent = item.price + "$";
  
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(price);
  
      container.appendChild(card);
    });
  });