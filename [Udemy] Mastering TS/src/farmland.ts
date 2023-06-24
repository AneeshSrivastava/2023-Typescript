interface Product {
    price: number
    name: string
    quantity: string
}

const printProduct = (product: Product): void =>{
    console.log(`${product.name} has price: $${product.price}`);
}

printProduct({price: 34, name: 'Lays', quantity: "120gms"})