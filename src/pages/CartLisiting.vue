<script setup>
import QuantityButton from '@/components/QuantityButton.vue';
import { cartStore } from '@/stores/cartStores';
import { ref,watch } from 'vue';
const cart= cartStore()
const cartItem = cart.items;

const totalprice = ref(cart.totalPrice);

const CalculatePrice = () =>{
totalprice.value = cartItem.reduce((total,item)=> total+ item.price*item.quantity,0)
}
watch(cartItem,(newItem,oldItem)=>{
  CalculatePrice()
},{deep:true})

const IncreaseQty= (item)=>{
item.quantity++
  
}
const DecreaseQty= (item)=>{
  if(item.quantity>0){
    item.quantity--;
  }
}
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
            <td class="py-2 px-4 border-b text-center">
              <button class="font-bold" @click="DecreaseQty(item)">-</button>
              <input type="text" placeholder="1" v-model.number="item.quantity" class="h-8 w-9 m-1 text-center border-2 r" />
              <button class="font-bold" @click="IncreaseQty(item)">+</button>  
            </td>
            <td class="py-2 px-4 border-b text-center">$ {{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="4" class="py-2 px-4 pr-6 border-t text-center font-bold">Total: ${{ totalprice.toFixed(2)}}</td>         
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<style scoped>

</style>