<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

// fetch the product from the API
const { data: product } = await useFetch(uri, { key: id });
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}

definePageMeta({
  layout: "products",
});
</script>

<style scoped>
</style>