import { reactive, readonly } from "vue";

const state = reactive({
  cartCount: 0,
  cart: [],
});

const addToCart = (product) => {
  state.cartCount++;
  state.cart.push(product);
};

export default readonly({
  get cartCount() {
    return state.cartCount;
  },
  get cart() {
    return state.cart;
  },
  addToCart,
});
