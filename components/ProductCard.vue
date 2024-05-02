<template>
  <div class="card text-center">
    <img :src="product.image" class="thumb" :alt="product.title" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <div class="grid grid-cols-2 gap-8">
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
      <p class="cart my-4" @click="clicked">Add to Cart</p>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
const emit = defineEmits(["add-to-cart"]);

const clicked = () => {
  emit("add-to-cart", product);
};
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>