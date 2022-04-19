const buyBtns = [...document.querySelectorAll('[data-name]')];
const cartUl = document.querySelector('.cart-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const cart = new ShoppingCart();

const removeItem = event => {
    const id = Number(event.target.dataset.id);
    cart.remove(id);
    createCartUi();
};

const createCartUi = () => {
    cartUl.innerText = '';

    for (const oneProductInfo of cart.getCartSummary()) {
        const {id, text} = oneProductInfo;
        const newLi = document.createElement('li');
        newLi.innerText = text;
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        cartUl.appendChild(newLi);
    }

    const cartTotalValue = cart.getTotalValue();
    buyAllBtn.innerText = `Proceed to payment - ${cartTotalValue.toFixed(2)}PLN`;

    buyAllBtn.disabled = cartTotalValue === 0;
};

const buyAllProducts = () => {
    const cartTotalValue = cart.getTotalValue();
    alert(`You've payed ${cartTotalValue.toFixed(2)}. Thank you!`);
    cart.clear();
    createCartUi();
};

const addProductToCart = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    const newProduct = new Product (name, price);
    cart.add(newProduct);
    createCartUi();
    // console.log(cart.getCartSummary());
};

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToCart);
}

buyAllBtn.addEventListener('click', buyAllProducts);

createCartUi();