fetch("https://fakestoreapi.in/api/products/category?offset=4&type=mobile")
.then(response => response.json())
.then(data => {
    allProducts = data.products;
    renderProducts(allProducts);
});

let allProducts = [];

function renderProducts(products) {
    let container = document.getElementById('product-place');
    container.innerHTML = '';
    products.forEach(element => {
        let card = document.createElement('div');
        card.className = "product-div";

        let image = document.createElement("img");
        image.src = element.image;

        let infoDiv = document.createElement("div");

        let title = document.createElement("h5");
        title.textContent = element.title;

        let price = document.createElement("h4");
        price.textContent = element.price + "$";

        let add = document.createElement("button");
        add.textContent = "Enter in box";
        add.className = "add-to-cart";
        add.onclick = function() {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({
                id: element.id,
                title: element.title,
                image: element.image,
                price: element.price
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            add.textContent = "Added!";
            add.disabled = true;
        };

        infoDiv.appendChild(title);
        infoDiv.appendChild(price);
        infoDiv.appendChild(add);

        card.appendChild(image);
        card.appendChild(infoDiv);

        container.appendChild(card);
    });
}


document.querySelector('.middle-element').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filtered = allProducts.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered);
});
