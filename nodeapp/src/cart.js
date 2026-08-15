export function calculateOrderTotal(items, shippingFee = 5) {
  const subtotal = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  if (subtotal >= 100) {
    return subtotal + shippingFee;
  }

  return subtotal + shippingFee;
}
