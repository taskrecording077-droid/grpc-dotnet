import { calculateOrderTotal } from './cart.js';

const cart = [
  { name: 'Keyboard', price: 60, quantity: 2 },
  { name: 'Mouse', price: 20, quantity: 1 }
];

const total = calculateOrderTotal(cart);
console.log(`Order total: $${total}`);
