import test from 'node:test';
import assert from 'node:assert/strict';

import { calculateOrderTotal } from '../src/cart.js';

test('charges shipping on a small order', () => {
  const items = [
    { price: 40, quantity: 2 },
  ];

  assert.equal(calculateOrderTotal(items), 85);
});

test('applies free shipping for orders above $100', () => {
  const items = [
    { price: 60, quantity: 2 },
  ];

  assert.equal(calculateOrderTotal(items), 120);
});
