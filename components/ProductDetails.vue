<template>
  <div class="card">
    <div class="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-10">
      <div class="p-7">
        <img :src="product.image" class="mx-auto my-7 w-10/12 md:w-full " :alt="product.title" />
      </div>
      <div class="p-7">
        <h2 class="text-2xl text-center md:text-4xl lg:text-left">{{ product.title }}</h2>
        <p class="text-xl my-7 text-center lg:text-left">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="button flex" @click="add">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span> Add to Cart </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

const { product } = defineProps(["product"]);
import eventBus from "~/eventBus.js";

const add = () => {
  eventBus.addToCart(product);
};
</script>

<style  scoped>
img {
  max-width: 400px;
}
.button {
  --color: #00a97f;
  padding: 0.8em 1.3em;
  background-color: transparent;
  border-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  font-family: inherit;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
}

.button::before,
.button::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1s ease;
}

.button::before {
  top: -1em;
  left: -1em;
}

.button::after {
  left: calc(100% + 1em);
  top: calc(100% + 1em);
}

.button:hover::before,
.button:hover::after {
  height: 410px;
  width: 410px;
}

.button:hover {
  color: #ffffff;
}

.button:active {
  filter: brightness(0.8);
}
</style>