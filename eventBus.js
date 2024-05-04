import { reactive, readonly } from "vue";

const state = reactive({
  cartCount: 0,
  cart: [],
  totalPrice: 0,
});

const addToCart = (product) => {
  state.cartCount++;
  const existingProduct = state.cart.find((p) => p.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
    return;
  }
  const reactiveProduct = reactive({ ...product, quantity: 1 });
  state.cart.push(reactiveProduct);
};

const increaseProductQuantity = (product) => {
  const productInCart = state.cart.find((p) => p.id === product.id);
  if (productInCart) {
    productInCart.quantity++;
    state.cartCount++;
  }
};

const removeFromCart = (product) => {
  const index = state.cart.findIndex((p) => p.id === product.id);
  if (index !== -1) {
    state.cart.splice(index, 1);
    state.cartCount -= product.quantity;
  }
};

const decreaseProductQuantity = (product) => {
  const productInCart = state.cart.find((p) => p.id === product.id);
  if (productInCart && productInCart.quantity > 1) {
    productInCart.quantity--;
    state.cartCount--;
  }
};

const cartTotalPrice = () => {
  state.totalPrice = 0;
  for (let i = 0; i < state.cart.length; i++) {
    state.totalPrice += state.cart[i].price * state.cart[i].quantity;
  }
};

export default readonly({
  get cartCount() {
    return state.cartCount;
  },
  get cart() {
    return state.cart;
  },
  get totalPrice() {
    cartTotalPrice();
    return state.totalPrice.toFixed(2);
  },
  addToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeFromCart,

});
