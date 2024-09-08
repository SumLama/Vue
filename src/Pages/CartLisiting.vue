<script setup>
import { ref } from 'vue';
const qty = ref(0)
 const cartItem = [{

 "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  
  },{
    "id": 2,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  
  }]
</script>
<template>
    <div class="container">
        <div>
        <table >
            <thead>
                <tr class="flex flex-row justify-around  w-screen px-5 my-4">
                    
                        <th>Index</th>
                    <th>Products</th>
                    <th>Quantity</th>
                    <th>Price</th>
                   
                  
                </tr>
            </thead> 
            <tbody>
               <tr v-for="(cart, index) in cartItem" class=" flex flex-row justify-around w-screen px-5 my-3 py-3 hover:bg-gray-100">
            
                    <td>{{ index+1 }}</td>
                    <td><img :src="cart.image" :alt="cart.title " height="100px" width="100px"/></td>
                    
                    <td>{{ qty}}</td>
                    
                    <td>$ {{ cart.price }}</td>
                    
                   
                </tr> 
            </tbody>
        </table>
    </div>
    </div>

</template>

<style scoped>

</style>