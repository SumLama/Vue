<script setup>
import { cartStore } from '@/stores/cartStores';
import { onMounted, ref,watch } from 'vue';
const cart= cartStore()
//  const totalprice = ref(cart.totalPrice)
// const CalculatePrice = () =>{
//  totalprice.value =  Object.values(cart.items).reduce((total,item)=> total+ item.price*item.quantity,0)
// }

// watch(cart.items,(newItem,oldItem)=>{
//   CalculatePrice()
// },{deep:true})

const IncreaseQty= (item)=>{
  item.quantity++ 
}
const DecreaseQty= (item)=>{
  if(item.quantity>0){
    item.quantity--;
  }
}

const handleCheckout = ()=>{
  alert("Proceeding to checkout")
  
}
</script>
<template>
  <div v-if="cart.itemCount > 0" class="flex justify-center my-8 ">
    <table class="sm:w-4/5 bg-white border-t mx-4 border-gray-200">
      <thead>
        <tr class="bg-gray-200 border-b">
          <th class="py-2 px-4">SNo</th>
          <th class="py-2 px-4">Products</th>
          <th class="py-2 px-4">Quantity</th>
          <th class="py-2 px-4">Price</th>
          <th class="py-2 px-4">Action</th> 
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,key,index) in cart.items"  class="hover:bg-gray-100 border-2">
          <td class="py-2 px-4 text-center">{{ index+1 }}</td>
          <td class="py-2 px-4 flex items-center justify-center">
            <img :src="item.image" :alt="item.title" class=" h-14 sm:h-16 md:h-24 object-contain" />
          </td>
          <td class="py-2 px-4  text-center">
            <button class="font-bold" @click="DecreaseQty(item)">-</button>
            <input type="text" placeholder="1" v-model.number="item.quantity" class="h-8 w-9 m-1 text-center border-2 r" />
            <button class="font-bold" @click="IncreaseQty(item)">+</button>  
          </td>
          <td class="py-2 px-4 text-center">$ {{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class=" text-center " @click="cart.removeItem(key)"><i class="fa fa-trash"></i></td>
        </tr>
        <tr>
          <td colspan="4">
            <div class="text-right my-5 mr-10   font-bold">Total: $ {{ cart.totalPrice.toFixed(2)}}</div> 
          </td>
        
         
          <td colspan="5">
            <div class="flex justify-center"> 
             <router-link to="/checkout">
              <button class="bg-gray-800 text-white p-2 my-5 rounded-md text-sm md:text-base" @click="handleCheckout">Checkout Now</button>
            </router-link>
            </div>
          </td> 
       
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>

</style>