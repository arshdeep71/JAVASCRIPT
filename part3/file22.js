const products = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    desc: "JBL 100W portable speaker",
    price: 25000,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smartphone",
    desc: "Apple iPhone 17 Pro",
    price: 120000,
    category: "Mobiles"
  },
  {
    id: 3,
    name: "Laptop",
    desc: "Dell i7 16GB RAM laptop",
    price: 95000,
    category: "Computers"
  },
  {
    id: 4,
    name: "Headphones",
    desc: "Sony noise cancelling headphones",
    price: 18000,
    category: "Audio"
  },
  {
    id: 5,
    name: "Smart Watch",
    desc: "Apple Watch Series 9",
    price: 42000,
    category: "Wearables"
  },
  {
    id: 6,
    name: "Airpods",
    desc: "Apple Airpods Pro (2nd Gen)",
    price: 26000,
    category: "Accessories"
  }
];

const cart = [];
let qty = 1;

function addToCart(id) {
  const product = products.find(p => p.id === id);


    cart.push({
      ...product,
      qty:1
    });
}

function increment(id) {
  const product = products.find(p=>p.id===id);
  cart.push({
    ...product,
    qty:qty+1

  })
}


addToCart(1);
addToCart(3);
addToCart(5);

// console.log(cart);
increment(1)
increment(5)

// console.log(cart);



function placeOrder(){
  let total = 0;
  for(let i=0;i<cart.length;i++){
    total += cart[i].price*cart[i].qty
  }

  const order = {
    email: "john@gmail.com",
    orderValue: total,
    items: cart,
  }
  console.log(order)
}
placeOrder()
