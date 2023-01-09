import Commerce from "@chec/commerce.js";

const commerce = new Commerce(import.meta.env.VITE_CHECK_PUBLIC_KEY);

export default class Product {
  list() {
    return commerce.products.list().then((product) => product.data);
  }
}
