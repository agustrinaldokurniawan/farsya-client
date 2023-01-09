import Commerce from "@chec/commerce.js";

const commerce = new Commerce(import.meta.env.VITE_CHECK_PUBLIC_KEY);

export default class CartService {
  addToCart(productId) {
    return commerce.cart.add(productId).then((response) => response);
  }
  updateCart(productId, quantity) {
    return commerce.cart
      .update(productId, { quantity })
      .then((response) => response);
  }
  removeFromCart(productId) {
    return commerce.cart.remove(productId).then((response) => response);
  }
  getCart() {
    return commerce.cart.retrieve().then((cart) => cart);
  }
}
