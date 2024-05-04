<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description"></Meta>
    </Head>
    <Header />
    <div class="container mx-auto p-4">
      <ProductDetails :product="product"/>
    </div>
    <Footer />
  </div>
</template>

<script setup>

const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

// fetch the product from the API
const { data: fetchedProduct } = await useFetch(uri, { key: id });
if (!fetchedProduct.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}
const product = { ...fetchedProduct.value, quantity: 1 };


definePageMeta({
  layout: "",
});

</script>

<style scoped>
</style>