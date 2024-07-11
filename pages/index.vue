<template>
  <div class="bg-white min-h-screen">
    <section
      class="flex items-start md:items-center h-screen bg-hero-pattern bg-cover bg-right-bottom md:bg-bottom bg-no-repeat bg-scroll md:bg-fixed py-16 px-4 md:px-12 text-[#27272b]"
    >
      <div class="w-full md:w-1/2">
        <h1
          class="font-bold mb-4 text-center md:text-left lg:text-5xl md:text-4xl text-3xl"
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
    </section>

    <section class="py-8 xs:py-16">
      <div class="container mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold">Our Latest Products</h2>
          <p class="text-gray-600 mt-4">
            Discover our latest products that are designed to inspire and
            delight.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-4">
          <div
            class="card flex flex-col justify-center items-center border border-black shadow-xl"
          >
            <NuxtLink to="/products/2">
              <img
                :src="product[1].image"
                class="cursor-pointer mb-4 max-w-48 -mt-20 transform transition-all duration-500 hover:scale-110"
              />
              <h3 class="font-semibold">Mens Casual Premium Slim</h3>
            </NuxtLink>
          </div>
          <div
            class="card flex flex-col justify-center items-center border border-black shadow-xl"
          >
            <NuxtLink to="/products/4">
              <img
                :src="product[3].image"
                class="cursor-pointer mb-4 max-w-48 -mt-16 transform transition-all duration-500 hover:scale-110"
              />
              <h3 class="font-semibold">{{ product[3].title }}</h3>
            </NuxtLink>
          </div>
          <div
            class="card flex flex-col justify-center items-center border border-black shadow-xl"
          >
            <NuxtLink to="/products/15">
              <img
                :src="product[14].image"
                class="cursor-pointer mb-4 max-w-48 -mt-20 transform transition-all duration-500 hover:scale-110"
              />
              <h3 class="font-semibold truncate">Women's Snowboard Jacket</h3>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-8 xs:py-16">
      <div class="container mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold">Our Best Sellers</h2>
          <p class="text-gray-600 mt-4">
            Check out our best-selling products that are loved by our customers.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-4">
          <BestProduct :product="product[5]" />
          <BestProduct :product="product[6]" />
          <BestProduct :product="product[7]" />
        </div>
      </div>
    </section>

    <!-- our services -->
    <section class="py-8 xs:py-16 bg-gray-200">
      <div class="container mx-auto px-8">
        <div class="text-center mb-20">
          <h2 class="text-3xl font-bold">Our Services</h2>
          <p class="text-gray-600 mt-4">
            We offer a range of services to help you get the most out of your
            shopping experience.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-4">
          <div
            class="card flex flex-col justify-center items-center bg-gray-800 text-slate-100"
          >
            <img src="assets/images/free-shipping.png" class="mb-4 max-h-48" />
            <h3 class="font-semibold">Free Shipping</h3>
            <p class="text-slate-300 text-center mt-4">
              We offer free shipping on all orders over $50.
            </p>
          </div>
          <div
            class="card flex flex-col justify-center items-center bg-gray-800 text-slate-100"
          >
            <img src="assets/images/secure-payment.png" class="mb-4 max-h-48" />
            <h3 class="font-semibold">Secure Payment</h3>
            <p class="text-slate-300 text-center mt-4">
              We use secure payment methods to protect your personal
              information.
            </p>
          </div>
          <div
            class="card flex flex-col justify-center items-center bg-gray-800 text-slate-100"
          >
            <img
              src="assets/images/quality-product.png"
              class="mb-4 max-h-48"
            />
            <h3 class="font-semibold">Quality Products</h3>
            <p class="text-slate-300 text-center mt-4">
              We only sell high-quality products that are built to last.
            </p>
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
  border: 1px solid rgb(234, 179, 8);
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