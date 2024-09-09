<script setup>

import { cartStore } from '@/stores/cartStores';
const cart= cartStore()
const cartItem = cart.items;
const totalprice = cart.totalPrice;
console.log(totalprice)       
</script>
<template>
    <div v-if="cartItem.length > 0" class="w-full flex justify-center my-8">
      <table class="w-4/5  bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border-b">Index</th>
            <th class="py-2 px-4 border-b">Products</th>
            <th class="py-2 px-4 border-b">Quantity</th>
            <th class="py-2 px-4 border-b">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItem" :key="item.id" class="hover:bg-gray-100">
            <td class="py-2 px-4 border-b text-center">{{ index + 1 }}</td>
            <td class="py-2 px-4 border-b flex items-center justify-center">
            <img :src="item.image" :alt="item.title" class="w-24 h-24 object-contain" />
          </td>
            <td class="py-2 px-4 border-b text-center"><input  type="text" v-model="item.quantity" height=""></td>
            <td class="py-2 px-4 border-b text-center">$ {{ item.price * item.quantity }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="4" class="py-2 px-4 pr-6 border-t text-center font-bold">Total: ${{ totalprice }}</td>         
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<style scoped>

</style>