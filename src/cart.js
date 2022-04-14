class ShoppingCart {
    constructor () {
        this.items = [];
    }

    clear() {
        this.items.length = 0;
    }

    add(item) {
        this.items.push(item);
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