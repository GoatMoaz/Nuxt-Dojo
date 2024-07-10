<template>
  <div class="bg-slate-100">
    <div class="container mx-auto p-4 ">
      <div class="grid grid-cols-4 gap-5">
        <div v-for="product in products" :key="product.id">
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// fetch the products from the API
const { data: products } = await useFetch("https://fakestoreapi.com/products");
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [
    {
      name: "description",
      content: "Nuxt Dojo Merchandise",
    },
  ],
});
</script>

<style  scoped>
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 425px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>