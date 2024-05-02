<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard
          :product="product"
          @add-to-cart="handleAddToCart(product)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// fetch the products from the API
const { data: products } = await useFetch("https://fakestoreapi.com/products");

const handleAddToCart = (product) => {
  console.log(product);
};
</script>

<style  scoped>
</style>