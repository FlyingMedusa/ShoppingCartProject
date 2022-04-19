class ShoppingCart {
    constructor () {
        this.items = this.loadFromLocalStorage();
    }

    clear() {
        this.items.length = 0;
        this.saveToLocalStorage();
    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
    }

    getTotalValue() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }

    getCartSummary() {
        return this.items
            .map((product, i) => {
                return {
                    id: i + 1,
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}PLN`,
                };
            });
    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('cart-items', JSON.stringify(this.items));
    }

    loadFromLocalStorage() {
        const itemJSON = localStorage.getItem('cart-items');

        if (itemJSON === null) {
            return [];
        } else {
            return JSON.parse(itemJSON);
        }
    }
}

class Product {
    constructor (productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}