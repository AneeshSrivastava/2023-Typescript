"use strict";
const printProduct = (product) => {
    console.log(`${product.name} has price: $${product.price}`);
};
printProduct({ price: 34, name: 'Lays', quantity: "120gms" });
