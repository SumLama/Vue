<script setup>
import { ref } from 'vue';
import { cartStore } from '@/stores/cartStores';

const cart = cartStore();
const items = ref(cart.items);
const handleOrder = () => {
  alert("Placed Order successfully...!");
};
</script>

<template>
  <div class="w-screen p-5">
    <
    <div class="flex justify-between items-start space-x-5">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        <div v-for="(item, index) in cart.items" :key="index" class="border-2 p-4 flex flex-col items-center w-full h-72">
          <img :src="item.image" :alt="item.name" class="h-24 w-16 mb-2" />
          <div class="text-lg font-semibold">Product: {{ item.title }}</div>
          <div class="text-base text-lg">Qty: {{ item.quantity }}</div>
        </div>
      </div>
      <div class="border-4 flex flex-col items-center justify-center text-center py-3 bg-gray-200 w-64 h-72">
        <p class="text-xl font-semibold mb-3">Order Summary</p>
        <p class="my-1 text-base">Total Price: ${{ cart.totalPrice.toFixed(2) }}</p>
        <button class="bg-gray-800 text-white p-2 rounded-md text-sm mt-3" @click="handleOrder">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>
