// const products = ["prodcut1","product2","product3"];

const products = [
  { id: 1, name: "Speaker", description: "JBL SPEAKER 100W", price: 25000 },
  { id: 2, name: "Iphone", description: "Apple Iphone 17", price: 100000 },
  { id: 3, name: "Airpods", description: "Apple Airpods", price: 25000 }
];

const cart = [];


// products.forEach((product)=>console.log(product));

products.forEach((product) => {
product.quantity=1
product.total = product.price*product.quantity
  cart.push({
    ...product
  });
});

console.log(cart);
