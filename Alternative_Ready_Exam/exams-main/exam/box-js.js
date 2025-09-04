const cart = JSON.parse(localStorage.getItem('cart') || '[]');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

if (cart.length === 0) {
    cartList.textContent = "Корзина пуста.";
} else {
    let total = 0;
    cart.forEach((item, idx) => {
        total += Number(item.price);
        let div = document.createElement('div');
        div.className = "product-div";
        div.innerHTML = `
            <img src="${item.image}" style="width:100px;">
            <span>${item.title}</span>
            <span>${item.price}$</span>
            <button class="remove-btn" data-idx="${idx}">Удалить</button>
        `;
        cartList.appendChild(div);
    });
    cartTotal.textContent = "Итого: " + total + "$";
}

// Удаление товара из корзины
cartList.onclick = function(e) {
    if (e.target.classList.contains('remove-btn')) {
        const idx = e.target.getAttribute('data-idx');
        cart.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload();
    }
};