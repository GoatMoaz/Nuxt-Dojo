<template>
  <div
    class="card flex flex-col justify-evenly items-center border border-black"
  >
    <div class="flex flex-col items-center justify-center">
      <img :src="product.image" class="mb-4 max-h-48" />

      <div class="rating">
        <input value="5" name="rating" id="star5" type="radio" />
        <label for="star5"></label>
        <input value="4" name="rating" id="star4" type="radio" />
        <label for="star4"></label>
        <input value="3" name="rating" id="star3" type="radio" />
        <label for="star3"></label>
        <input value="2" name="rating" id="star2" type="radio" />
        <label for="star2"></label>
        <input value="1" name="rating" id="star1" type="radio" />
        <label for="star1"></label>
      </div>
    </div>

    <h3 class="font-semibold text-center">{{ product.title }}</h3>
  </div>
</template>

<script setup>
const { product } = defineProps(["product"]);
</script>

<style scoped>
.rating input {
  display: none;
}

.rating label {
  float: right;
  color: rgb(234, 179, 8);
}

.rating label:before {
  content: "\2605";
  font-size: 30px;
}
</style>