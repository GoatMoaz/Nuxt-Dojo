<template>
  <div>
    <Header />
    <div class="card container mx-auto my-4" v-if="cart.length">
      <div v-for="product in cart" :key="product.id">
        <CartDetails :product="product"  />
      </div>
      <div class="my-4 flex justify-between mx-8" >
        <h2 class="text-2xl font-bold">Total Price : ${{ totalPrice }}</h2>
        <button class="button">
          Checkout
          <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
            <path
              clip-rule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-else>
        <h2 class="text-2xl font-bold text-center my-8">No items in the cart</h2>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import eventBus from "~/eventBus.js";

const totalPrice = computed(() => eventBus.totalPrice);
const cart = computed(() => eventBus.cart);

definePageMeta({
  layout: "",
});

</script>

<style scoped>
.button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background-color: #12b488;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: 3px solid #ffffff4d;
  outline: none;
  overflow: hidden;
  font-size: 15px;
}

.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

@media (max-width: 768px) {
  .button {
    width: 90%;
  }
  .justify-end {
    justify-content: center;
  }
}
</style>