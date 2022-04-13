const cart = new ShoppingCart();

const oranges = new Product ('Oranges', 5.29);
const cucumbers = new Product ('Cucumbers', 9.99);
const tomatoes = new Product ('Tomatoes', 10.99);

cart.add(cucumbers);
cart.add(cucumbers);
cart.add(oranges);

console.log(cart.getTotalValue());
cart.showCart();
cart.remove(2);
console.log(cart.getTotalValue());
cart.showCart();