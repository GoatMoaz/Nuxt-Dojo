<template>
  <div class="card text-center">
    <img :src="product.image" class="thumb" :alt="product.title" />
    <p class="font-bold m-4 truncate">
      {{ product.title }}
    </p>
    <div class="flex justify-center">
      <NuxtLink :to="`/products/${product.id}`">
        <button class="button">View Details</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
  transition: all 0.6s;
  border-radius: 10px;
}

.thumb:hover {
  transform: scale(1.1);
}
.button {
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  color: #12b488;
  transition: all 0.6s;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #12b488;
}

button:hover {
  color: #ffffff;
  transform: scale(1.1);
  outline: 2px solid #12b488;
  box-shadow: 4px 5px 17px -4px #12b488;
}

button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #12b488;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}

button:hover::before {
  width: 250%;
}
</style>