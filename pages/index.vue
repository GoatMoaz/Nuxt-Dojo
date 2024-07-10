<template>
  <div class="bg-white min-h-screen relative">
    <section
      class="container mx-auto py-12 px-6 xs:py-16 xs:px-8 text-gray-900 flex flex-col justify-between items-center md:flex-row"
    >
      <div class="w-full md:w-1/2">
        <h1
          class="text-4xl font-bold mb-4 text-center md:text-left md:text-5xl"
        >
          Nuxt Dojo Merch
        </h1>
        <p class="mb-4 text-center md:text-left">
          At Nuxt-Dojo-Merch, we understand the passion and dedication that goes
          into being a developer. Our mission is to provide high-quality
          merchandise that reflects the pride and creativity of the coding
          community. Whether you're looking for stylish apparel, cool
          accessories, or practical office items, we've got you covered.
        </p>
        <div class="text-center md:text-left mb-4">
          <NuxtLink to="/products">
            <button class="button">Shop Now</button>
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-center md:justify-start">
        <img
          :src="product[0].image"
          class="max-w-72 2xs:max-w-xs md:max-w-sm"
        />
      </div>
    </section>
    <section class="py-8 xs:py-16">
      <div class="container mx-auto px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold">Crafted with excellent material.</h2>
          <p class="text-gray-600 mt-4">
            Indulge in quality craftsmanship with premium materials for lasting
            beauty and durability.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0">
          <div class="flex flex-col justify-center items-center">
            <img :src="product[1].image" class="mb-4 max-w-48" />
            <h3 class="font-semibold">Mens Casual Premium Slim</h3>
            <p>${{ product[1].price }}</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img :src="product[3].image" class="mb-4 max-w-48" />
            <h3 class="font-semibold">{{ product[3].title }}</h3>
            <p>${{ product[3].price }}</p>
          </div>
          <div class="flex flex-col justify-center items-center">
            <img :src="product[14].image" class="mb-4 max-w-48" />
            <h3 class="font-semibold truncate">
              Women's 3-in-1 Snowboard Jacket
            </h3>
            <p>${{ product[14].price }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const { data: product } = await useFetch("https://fakestoreapi.com/products");
</script>
<style scoped>
.button {
  display: inline-block;
  padding: 10px 24px;
  border: 1px solid #4f4f4f;
  border-radius: 9999px;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  font-size: 19px;
  cursor: pointer;
  color: black;
  z-index: 1;
}

.button:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgb(234, 179, 8);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: rgb(234, 179, 8);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button:hover {
  color: #ffffff;
  border: 1px solid #39bda7;
}

.button:hover:before {
  top: -35%;
  background-color: rgb(234, 179, 8);
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button:hover:after {
  top: -45%;
  background-color: rgb(234, 179, 8);
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
</style>