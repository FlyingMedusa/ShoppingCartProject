const buyBtns = [...document.querySelectorAll('[data-name]')];
const cartUl = document.querySelector('.cart-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const cart = new ShoppingCart();

const createCartUi = () => {
    cartUl.innerText = '';

    for (const oneProductInfo of cart.getCartSummary()) {
        const newLi = document.createElement('li');
        newLi.innerText = oneProductInfo;
        cartUl.appendChild(newLi);
    }

    const cartTotalValue = cart.getTotalValue();
    buyAllBtn.innerText = `Proceed to payment - ${cartTotalValue.toFixed(2)}PLN`;

    if (cartTotalValue > 0) {
        buyAllBtn.removeAttribute('disabled');
    } else {
        buyAllBtn.setAttribute('disabled', 'true');
    }
};

const addProductToCart = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    const newProduct = new Product (name, price);
    cart.add(newProduct);
    createCartUi();
    // console.log(cart.getCartSummary());
}

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToCart);
}
