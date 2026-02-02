// const product = { name: "shirt", price: 500, quantity: 7 };
const { price, quantity } = { name: "shirt", price: 500, quantity: 7 };
// console.log(price);
// console.log(price, quantity);

// const discount = product.price*20/100
// const yourpay = product.price - discount
// const vatAmount = product.price*7/100
// const totalAmount = yourpay + vatAmount

// const price = product.price;

// const discount = (price * 20) / 100;
// const yourpay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmount = yourpay + vatAmount;

const discount = (price * 20) / 100;
const yourpay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourpay + vatAmount;

const device = { name: "phone", brand: "samsung", price: 22000 };
const { brand } = device;

const numbers = [25, 75];
const [first, second] = numbers;
console.log(first);

const [math, physics] = [90, 99];
console.log(physics);
