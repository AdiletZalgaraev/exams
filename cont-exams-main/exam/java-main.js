fetch("https://fakestoreapi.in/api/products/category?offset=4&type=mobile")
.then (response => response.json())
.then (data => {
    console.log(data);
    let result = data.products
    let container = document.getElementById('product-place')
    result.forEach(element => {
        console.log(element.title);
        console.log(element.image);
        console.log(element.price);

        let card = document.createElement('div')
        card.classname = "product-div";

        let title = document.createElement("h5");
        title.textContent = element.title ;
        
        let image = document.createElement("img");
        image.src = element.image;

        let price = document.createElement("h4");
        price.textContent = element.price + "$";

        let add = document.createElement("button");
        add.textContent = "To box";
        add.className = "add-to-cart";
        add.onclick = function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push({
              title: element.title,
              image: element.image,
              price: element.price
            });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`Added to cart: ${element.title}`);
          };


        card.appendChild(add);
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(price);

        container.appendChild(card)
    });
})
