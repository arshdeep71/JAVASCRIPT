const products = [
  { id: 1, name: "Speaker", description: "JBL SPEAKER 100W", price: 25000 },
  { id: 2, name: "Iphone", description: "Apple Iphone 17", price: 100000 },
  { id: 3, name: "Airpods", description: "Apple Airpods", price: 25000 }
];

// let cart = [];


// products.forEach((product) => {
//     const obj = {
//         ...product,
//         quantity: 1,
//         total: product.price*product.quantity
//     };
//     cart = [...cart,obj]
// });

const cart = products.map((product)=>{
    const obj ={
        ...product,
        quantity:1,
        total:product.price*product.quantity
    }
    return obj;

})
console.log(cart);
